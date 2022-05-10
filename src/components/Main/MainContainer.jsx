import React from 'react';
import Main from './Main';
import s from './Main.module.css';




const MainContainer = ({ flightList }) => {

    if (flightList.result.flights.length === 0) {
        return <h3 className={s.query__nofound}>по вашему запросу ничего не найдено</h3>
    } else {
        return (
            <Main flightList={flightList} />
        )
    }
}
export default MainContainer
