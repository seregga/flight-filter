import React, { useEffect, useState } from 'react';
import './../App.css';
import MOCK_FLIGHT from '../data/MOCK_FLIGHT.json';
import Filters from './SideBar/Filters';
import MainContainer from './Main/MainContainer';
import Loader from './UI/Loader/Loader';


const StoreContainer = (props) => {

    const [flightList, setFlightList] = useState(MOCK_FLIGHT)
    const [beginCostInput, setBeginCostInput] = useState('')
    const [endCostInput, setEndCostInput] = useState(23000)
    const [isLoading, setIsLoading] = useState(false)
    const [sortValue, setSortValue] = useState('1')


    const filterFlight = (MOCK_FLIGHT, beginCostInput, endCostInput) => {
        return MOCK_FLIGHT.result.flights.map((f) => {
            return Number(f.flight.price.total.amount)
        }).filter((el) => {
            return el >= beginCostInput && el <= endCostInput
        })
    }

    useEffect(() => {
        console.log('useEffect');
        setIsLoading(true)
        const timeOut = setTimeout(() => {
            const filterFlightByPrice = filterFlight(MOCK_FLIGHT, beginCostInput, endCostInput)
            setFlightList(
                {
                    ...MOCK_FLIGHT,
                    result: {
                        ...MOCK_FLIGHT.result,
                        flights: MOCK_FLIGHT.result.flights.filter(el => filterFlightByPrice
                            .includes(Number(el.flight.price.total.amount)))

                    }
                }
            )
            setIsLoading(false)
        }, 500);
        return () => clearTimeout(timeOut)

    }, [beginCostInput, endCostInput])


    return (
        <div className='app-wrap'>
            {isLoading
                ? <div className='loader-wrap'><Loader /></div>
                : <MainContainer flightList={flightList} />
            }

            <Filters
                setSortValue={setSortValue}
                sortValue={sortValue}
                beginCostInput={beginCostInput}
                setBeginCostInput={setBeginCostInput}
                endCostInput={endCostInput}
                setEndCostInput={setEndCostInput} />
        </div>
    )
}

export default StoreContainer
