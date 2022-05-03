import Main from './Main';

const MainContainer = ({ flightList, beginCostInput, setBeginCostInput, endCostInput, setEndCostInput }) => {

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
