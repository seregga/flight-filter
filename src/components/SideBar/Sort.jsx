import React from 'react';

const Sort = ({ sortValue, setSortValue }) => {


    const changeValue = (e) => {
        setSortValue(e.currentTarget.value)
    }
    return (
        <div>
            <form >
                <h5>Сортировать</h5>
                <div>
                    <input name='up-price' type='radio'
                        onChange={changeValue} value='1'
                        checked={sortValue === '1' ? true : false} /> - по возрастанию цены
                </div>
                <div>
                    <input name='down-price' type='radio'
                        onChange={changeValue} value='2'
                        checked={sortValue === '2' ? true : false} /> - по убыванию цены
                </div>
                <div>
                    <input name='time-path' type="radio"
                        onChange={changeValue} value='3'
                        checked={sortValue === '3' ? true : false} /> - по времени в пути
                </div>
            </form>
        </div>
    )
}
export default Sort
