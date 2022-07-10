import React from 'react'

import './css/StatusButtons.css'

const StatusButtons = props => {
    return (
        <div className='statusbutton-maincontainer'>
            <button onClick={() => props.StatusHandler('all')} className={props.status === 'all' ? 'activebutton' : 'nonactivebutton'}>All</button>
            <button onClick={() => props.StatusHandler('Pending')} className={props.status === 'Pending' ? 'activebutton' : 'nonactivebutton'}>Pending</button>
            <button onClick={() => props.StatusHandler('Completed')} className={props.status === 'Completed' ? 'activebutton' : 'nonactivebutton'}>Completed</button>
        </div>
    )
}

export default StatusButtons