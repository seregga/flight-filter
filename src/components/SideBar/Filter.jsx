import React from 'react';

const Filter = (props) => {
    //     const [checked, setChecked] = useState(true);

    //    function chengeCheckbox() {
    //       setChecked(!checked);
    //    }

    //    return <div>
    //       <input type="checkbox" checked={checked} onChange={chengeCheckbox} />
    //    </div>;
    // -----------
    //     return <div>
    //     <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    //     <span>{checked ? 'галочка есть' : 'галочки нет'}</span>
    //  </div>;
    return (
        <div>
            <form >
                <h5>Фильтровать</h5>
                <div>
                    <input name={'transfer'} type={'checkbox'} /> - 1 пересадка
                </div>
                <div>
                    <input name={'no-transfer'} type={'checkbox'} /> - без пересадок
                </div>
            </form>
        </div>
    )
}
export default Filter
