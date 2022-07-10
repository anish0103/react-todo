import React from 'react';

import './css/InputItem.css';

const InputItem = (Probs) => {
    
    const add = (event) => {
        event.preventDefault();
        Probs.addlist(event.target[0].value); //input value
        event.target[0].value = '';
    }

    return (
        <form className='inputitem' onSubmit={add}>
            <input placeholder={Probs.placeholder} />
            <button>{Probs.btntxt}</button>
        </form>
    )
};

export default InputItem;