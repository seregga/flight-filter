import React from "react"
import s from './../Main.module.css';

const TimeArrival = ({ timeArrival, idxSegmentFlight }) => {
    return (
        <div className={s.information__time_right}>
            <span>{timeArrival.segments[idxSegmentFlight].arrivalDate} </span>
        </div>
    )
}
export default TimeArrival
