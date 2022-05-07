import React from "react";

const Airlines = (props) => {
    return (
        <div>
            <form >
                <h5>Авиакомпании</h5>
                <div>
                    <input name={'transfer'} type={'checkbox'} />-Аэрофлот
                </div>
                <div>
                    <input name={'no-transfer'} type={'checkbox'} />-LOT Polish Airlines
                </div>
            </form>
        </div >
    )
}
export default Airlines
