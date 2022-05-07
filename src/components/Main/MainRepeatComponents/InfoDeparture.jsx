import React from "react"

const InfoDeparture = ({ infoDeparture }) => {
    return (<>
        <span>{infoDeparture.segments[0].departureCity
            ? infoDeparture.segments[0].departureCity.caption
            : 'no result'
        }, </span>
        <span>{infoDeparture.segments[0].departureAirport.caption} </span>
        <span>({infoDeparture.segments[0].departureAirport.uid}) </span>
    </>)
}
export default InfoDeparture
