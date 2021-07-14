import './css/item.css';

const Item = (Probs) => {

    const removeitem = () => {
        Probs.removeitem(Probs.id, Probs.index);
    }

    return (
            <li className='item animation' key={Probs.index} id={Probs.id} onClick={removeitem} >{Probs.data.des}</li>
    )
};

export default Item;