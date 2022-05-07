import React from 'react';
import '../../App.css';
import Airlines from './Airlines';
import Cost from './Cost';
import Filter from './Filter';
import Sort from './Sort';

const Filters = ({ beginCostInput, setBeginCostInput, endCostInput, setEndCostInput, setSortValue, sortValue }) => {
    return (
        <div className='filter-wrap'>
            <Sort setSortValue={setSortValue} sortValue={sortValue} />
            <Filter />
            <Cost beginCostInput={beginCostInput}
                setBeginCostInput={setBeginCostInput}
                endCostInput={endCostInput}
                setEndCostInput={setEndCostInput} />
            <Airlines />
        </div>
    )
}

export default Filters
