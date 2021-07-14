import InputItem from './Components/InputItem';
import ShowItem from './Components/ShowItem';
import { useState } from 'react';
import './Components/css/msg.css';

function App() {
  const [list , setlist] = useState([]);
  const [show, listshow ] = useState(false);
  const [alert, setalert] = useState(false);

  const addlist = (data) => {
    if(data===''){
      return setalert(true);
    } else {
      setlist((prev) => {
        return [...prev, {
          id: Math.random(),
          des : data
        }]
      })
      setalert(false);
      listshow(true);
    }
    
  };

  const removeitem = (t, i) => {
    const index = list.indexOf(list[i]);
    list.splice(index,1);
    const d = list.map((a) =>  {
      return {
        id: a.id,
        des: a.des
      }
    })
    setlist(d)
    if(d.length===0){
      listshow(false)
    }
  }

  let content, classname;
  if(alert){
    content = 'Please Write Something';
    classname = 'alert';
  }else {
    content = 'Nothing to show';
    classname = 'p';
  }

  return (
    <div>
      <InputItem addlist={addlist} />
      {show && <ShowItem data={list} removeitem={removeitem} />}
      {!show && <p className={classname}>{content}</p>}
    </div>
  );
}

export default App;