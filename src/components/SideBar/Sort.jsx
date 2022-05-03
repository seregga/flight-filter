import React from 'react';

const Sort = (props) => {
    return (
        <div>
            <form >
                <h5>Сортировать</h5>
                <div>
                    <input name={'up-price'} type={'checkbox'} />-по возрастанию цены
                </div>
                <div>
                    <input name={'down-price'} type={'checkbox'} />-по убыванию цены
                </div>
                <div>
                    <input name={'time-path'} type={"checkbox"} />-по времени в пути
                </div>
            </form>
        </div>
    )
}
export default Sort
