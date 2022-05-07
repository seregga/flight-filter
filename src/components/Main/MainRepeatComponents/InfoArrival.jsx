import React from "react"

const InfoArrival = ({ infoArrival, infoIdxSegmentFlight }) => {
    return (<>
        <span>{infoArrival.segments[infoIdxSegmentFlight].arrivalCity
            ? infoArrival.segments[infoIdxSegmentFlight].arrivalCity.caption
            : 'не найден'}, </span>
        <span>{infoArrival.segments[infoIdxSegmentFlight].arrivalAirport.caption} </span>
        <span>({infoArrival.segments[infoIdxSegmentFlight].arrivalAirport.uid}) </span>
    </>)
}
export default InfoArrival
