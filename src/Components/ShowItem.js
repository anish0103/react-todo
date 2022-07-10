import Item from './Item';
import './css/ShowItem.css'

const ShowItem = (Probs) => {

    const removeitem = (data, index) => {
        Probs.removeitem(data, index);
    }
    const updateitem = (data, index) => {
        Probs.updateitem(data, index);
    }

    return (
        <div className='showitem-maincontainer'>
            {Probs.data.map((data, index) => (<Item key={index} id={data.id} index={index} data={data} updateitem={updateitem} removeitem={removeitem} />))}
        </div>
    )
};

export default ShowItem;