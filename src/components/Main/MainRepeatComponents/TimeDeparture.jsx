import React from "react"
import s from './../Main.module.css';

const TimeDeparture = ({ timeDeparture }) => {
    return (
        <div className={s.information__time_left}>
            <span>{timeDeparture.segments[0].departureDate} </span>
        </div>
    )
}
export default TimeDeparture
