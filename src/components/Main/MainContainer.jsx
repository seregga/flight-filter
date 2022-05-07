import Main from './Main';

const MainContainer = ({ flightList, beginCostInput, setBeginCostInput, endCostInput, setEndCostInput }) => {

    // const flightListSortUpCost = flightList.result.flights.map(el => Number(el.flight.price.total.amount))
    //     .sort((a, b) => a - b)
    // console.log(flightListSortUpCost);

    return (
        <Main flightList={flightList}
            beginCostInput={beginCostInput}
            setBeginCostInput={setBeginCostInput}
            endCostInput={endCostInput}
            setEndCostInput={setEndCostInput}
        />
    )
}
export default MainContainer
