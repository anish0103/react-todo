import React from 'react';
import './css/InputItem.css';
import './css/input.css';
import './css/button.css';


const InputItem = (Probs) => {
    const add = (event) => {
        event.preventDefault();
        Probs.addlist(event.target[0].value); //input value
        event.target[0].value = '';
    }

    return (
        <React.Fragment>
            <form onSubmit={add}>
                <div className='inputitem'>
                    <input className={'input'} placeholder={Probs.placeholder} />
                    <button className={'button'}>{Probs.btntxt}</button>
                </div>
            </form>

        </React.Fragment>
    )
};

export default InputItem;