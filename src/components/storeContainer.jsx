import React, { useEffect, useState } from 'react';
import './../App.css';
import MOCK_FLIGHT from '../data/MOCK_FLIGHT.json';
import Filters from './SideBar/Filters';
import MainContainer from './Main/MainContainer';
import Loader from './UI/Loader/Loader';
import { filterByFlightCost } from '../common/common';

const StoreContainer = () => {
    console.log('working storeContainer');
    const [flightList, setFlightList] = useState(MOCK_FLIGHT)
    const [beginCostInput, setBeginCostInput] = useState('')
    const [endCostInput, setEndCostInput] = useState(50000)
    const [isLoading, setIsLoading] = useState(false)
    const [sortValueInput, setSortValueInput] = useState('1')
    const [transferValueInput, setTransferValueInput] = useState('1')

    const filteredByCostAndTransfer = () => {
        console.log('working filteredByCostAndTransfer');
        const filteredByFlightCost = MOCK_FLIGHT.result.flights
            .filter(el => filterByFlightCost(MOCK_FLIGHT, beginCostInput, endCostInput)
                .includes(Number(el.flight.price.total.amount)))

        if (transferValueInput === '1') {
            return filteredByFlightCost.filter(el => el.flight.legs[0].segments.length === 2
                && el.flight.legs[1].segments.length === 2)
        } else {
            return filteredByFlightCost.filter(el => el.flight.legs[0].segments.length === 1
                && el.flight.legs[1].segments.length === 1)
        }
    }

    useEffect(() => {

        setIsLoading(true)

        const timeOut = setTimeout(() => {

            setFlightList(
                {
                    ...MOCK_FLIGHT,
                    result: {
                        ...MOCK_FLIGHT.result,
                        flights: filteredByCostAndTransfer()
                    }
                }
            )

            setIsLoading(false)

        }, 500);

        return () => clearTimeout(timeOut)

    }, [beginCostInput, endCostInput, transferValueInput])

    return (
        <div className='app-wrap'>
            <Filters
                transferValueInput={transferValueInput}
                setTransferValueInput={setTransferValueInput}
                setSortValueInput={setSortValueInput}
                sortValueInput={sortValueInput}
                beginCostInput={beginCostInput}
                setBeginCostInput={setBeginCostInput}
                endCostInput={endCostInput}
                setEndCostInput={setEndCostInput}
                flightList={flightList}
                setFlightList={setFlightList}
                setIsLoading={setIsLoading}
            />
            {isLoading
                ? <div className='loader-wrap'><Loader /></div>
                : <MainContainer flightList={flightList}
                    sortValueInput={sortValueInput} />
            }
        </div>
    )
}

export default StoreContainer
