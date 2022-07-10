import Delete from './Images/delete.png'
import Complete from './Images/complete.png'
import './css/item.css';

const Item = (props) => {
    
    const removeitem = () => {
        props.removeitem(props.id, props.index);
    }
    const updateitem = () => {
        props.updateitem(props.id, props.index);
    }

    return (
        <div className='itemelement' key={props.index} id={props.id} >
            <div className={props.data.status === "Complete" ? "itemtext completedtext" : "itemtext"}>
                {props.data.value}
            </div>
            <div>
                <button className='completebutton' onClick={updateitem}>
                    <img alt='complete' src={Complete} />
                </button>
                <button className='deletebutton' onClick={removeitem}>
                    <img alt='delete' src={Delete} />
                </button>
            </div>
        </div>
    )
};

export default Item;