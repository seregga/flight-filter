import React from "react"
import s from './../Main.module.css';

const TimeFlight = ({ timeFlight }) => {
    return (
        <div className={s.information__time_center}>
            <span>{timeFlight.duration} мин</span>
        </div>
    )
}
export default TimeFlight
