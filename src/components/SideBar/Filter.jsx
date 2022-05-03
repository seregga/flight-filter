import React from 'react';

const Filter = (props) => {
    return (
        <div>
            <form >
                <h5>Фильтровать</h5>
                <div>
                    <input name={'transfer'} type={'checkbox'} />-по возрастанию цены
                </div>
                <div>
                    <input name={'no-transfer'} type={'checkbox'} />-по убыванию цены
                </div>
            </form>
        </div>
    )
}
export default Filter
