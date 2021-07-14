import Item from './Item';
import './css/ulcontainer.css'

const ShowItem = (Probs) => {

    const removeitem = (data, index) => {
        Probs.removeitem(data, index);
    }
    return (
        <div className='ulcontainer'>
            <ul className='ul'>
                {Probs.data.map((data, index) => <Item key={index} id={data.id} index={index} data={data} removeitem={removeitem} />)}
            </ul>
        </div>
    )
};

export default ShowItem;