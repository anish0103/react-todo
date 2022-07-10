import { useState, useEffect } from 'react';

import InputItem from './Components/InputItem';
import StatusButtons from './Components/StatusButtons';
import ShowItem from './Components/ShowItem';

function App() {
  const [list, setlist] = useState([]);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    const localStorageData = localStorage.getItem("tododata")
    if (localStorageData === null) {
      localStorage.setItem("tododata", JSON.stringify([]))
    } else {
      const Data = JSON.parse(localStorageData)
      setlist(Data)
      if (Data.length !== 0) {
        if (status === "all") {
          const NewData = Data.filter(data => data.status === "Pending" || data.status === "Complete")
          setlist(NewData)
        } else if (status === "Pending") {
          const NewData = Data.filter(data => data.status === "Pending")
          setlist(NewData)
        } else {
          const NewData = Data.filter(data => data.status === "Complete")
          setlist(NewData)
        }
      }
    }
  }, [status])

  const addlist = (data) => {
    if (data.trim().length === 0 || data === '') {
      return alert("Please enter some valid input!");
    } else {
      const Data = list;
      Data.push({ id: Math.random(), value: data, status: "Pending" })
      localStorage.setItem("tododata", JSON.stringify(Data))
      setlist(JSON.parse(localStorage.getItem("tododata")));
    }

  };

  const removeitem = (data, elementindex) => {
    const index = list.indexOf(list[elementindex]);
    list.splice(index, 1);
    const NewData = list.map((element) => {
      return {
        id: element.id,
        value: element.value,
        status: element.status
      }
    })
    localStorage.setItem('tododata', JSON.stringify(NewData))
    setlist(JSON.parse(localStorage.getItem("tododata")));
  }

  const updateitem = (data, elementindex) => {
    const index = list.indexOf(list[elementindex]);
    list[index].status = "Complete"
    localStorage.setItem('tododata', JSON.stringify(list))
    setlist(JSON.parse(localStorage.getItem("tododata")));
  }

  const StatusHandler = data => {
    setStatus(data)
  }

  return (
    <div className='maincontainer'>
      <div className='container'>
        <InputItem placeholder="Add a new task" btntxt="Add" addlist={addlist} />
        <StatusButtons StatusHandler={StatusHandler} status={status} />
        {list.length === 0 ? <p style={{ fontSize: "15px", color: "#646464", paddingTop: '10px' }}>Nothing to show.</p> : <ShowItem data={list} updateitem={updateitem} removeitem={removeitem} />}
      </div>
    </div>
  );
}

export default App;