import InputItem from './Components/InputItem';
import ShowItem from './Components/ShowItem';
import { useState } from 'react';
// import './Components/css/msg.css';

const App = () => {
    const [list, setlist] = useState([]);
    const [load, setload] = useState(true);
    const [user, setuser] = useState('');
    const [show, listshow] = useState(false);
    const [alert, setalert] = useState(false);
    const [login, setlogin] = useState(false);

    const username = (data) => {
        setuser(data);
        setlogin(true);
        setload(false);
    }

    const fetchlist = async () => {
        const response = await fetch(`https://reacttodo-b5783-default-rtdb.firebaseio.com/${user}.json`)
        const data = await response.json()
        while (!response.ok);
        convertlist(data);
    }

    if (!load) {
        fetchlist();
    }

    let todo = [];
    const convertlist = (t) => {
        if (t === null) {
            return setload(true);
        }
        Object.keys(t).forEach((key) => todo.push({ id: key, des: t[key].des }));
        setlist(todo);
        listshow(true);
        setload(true);
    }

    const postlist = async (listdata) => {
        const data = { id: Math.random(), des: listdata }
        const response = await fetch(`https://reacttodo-b5783-default-rtdb.firebaseio.com/${user}.json`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        while (!response.ok);
        fetchlist();
    }

    const addlist = (data) => {
        if (data === '') {
            return setalert(true);
        } else {
            postlist(data);
            setalert(false);
            listshow(true);
        }

    };

    const fetchremove = async (id) => {
        const response = await fetch(`https://reacttodo-b5783-default-rtdb.firebaseio.com/${user}/${id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: null
        })
        while (!response.ok);
        fetchlist();
    }

    const removeitem = (i, t) => {
        const index = list.indexOf(list[t]);
        list.splice(index, 1);
        const d = list.map((a) => {
            return {
                id: a.id,
                des: a.des
            }
        })
        setlist(d)
        fetchremove(i);
        if (d.length === 0) {
            listshow(false)
        }
    }

    let content, classname, welcome;
    if (alert) {
        content = 'Please Write Something';
        welcome = `Enter Your Content`
        classname = 'alert';
    }
    else if (!load) {
        content = 'Loading';
        welcome = `WELCOME ${user}`
        classname = 'p';
    } else {
        content = 'Nothing to show';
        welcome = `Enter Your Content`
        classname = 'p';
    }

    let showcontent;
    if (!login) {
        showcontent = <InputItem addlist={username} placeholder={'Enter Your Username'} btntxt={'Go'} />
    }
    else {
        showcontent = <div>
            <InputItem addlist={addlist} placeholder={welcome} btntxt='Add' />;
                {show && <ShowItem data={list} removeitem={removeitem} />}
            {!show && <p className={classname}>{content}</p>}
        </div>
    }

    return (
        <div>
            {showcontent}
        </div>
    );
}

export default App;