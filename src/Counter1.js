import React from 'react';
import { useEffect, useState } from 'react';
import useCounter from './Hooks/useCounter';
import Alertcustom from './Hooks/Alert';

const Counter1 = () => {
    let [counter, Setcounter] = useState(0)
    let [open, setOpen] = useState(false)
    const changeCount = (name) => {  
        console.log(this,name)
        Setcounter(counter + 1);
        setOpen(true);
    }
    useCounter(counter);
    const changeOpen =(action,customMessage)=> {
        console.log(customMessage)
        setOpen(action)
    }
    return (

        <React.Fragment>
            <Alertcustom open={open} counter={counter} onClose={changeOpen}/>
            <button onClick={() => changeCount('akhil')}>Click {counter}</button>
        </React.Fragment>
    );
};

export default Counter1;