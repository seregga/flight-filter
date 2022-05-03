import React, { useEffect, useState } from 'react';
import './../App.css';
import MOCK_FLIGHT from '../data/MOCK_FLIGHT.json';
import Filters from './SideBar/Filters';
import MainContainer from './Main/MainContainer';


const filterFlight = (MOCK_FLIGHT, beginCostInput, endCostInput) => {
    return MOCK_FLIGHT.result.flights.map((f, index) => {
        return Number(f.flight.price.total.amount)
    }).filter((el) => {
        return el > beginCostInput && el < endCostInput
    })
}

const StoreContainer = () => {

    const [flightList, setFlightList] = useState(MOCK_FLIGHT)
    const [beginCostInput, setBeginCostInput] = useState(1)
    const [endCostInput, setEndCostInput] = useState(25000)

    useEffect(() => {
        setTimeout(() => {
            const filt = filterFlight(MOCK_FLIGHT, beginCostInput, endCostInput)
            setFlightList(
                {
                    ...MOCK_FLIGHT,
                    result: {
                        ...MOCK_FLIGHT.result,
                        flights: MOCK_FLIGHT.result.flights.filter(el => filt.includes(Number(el.flight.price.total.amount)))
                    }
                }
            )
        }, 500);

    }, [beginCostInput, endCostInput])

    return (
        <div className='app-wrap'>
            <MainContainer flightList={flightList} />
            <Filters
                beginCostInput={beginCostInput}
                setBeginCostInput={setBeginCostInput}
                endCostInput={endCostInput}
                setEndCostInput={setEndCostInput} />
        </div>
    )
}

export default StoreContainer
