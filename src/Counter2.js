import React from 'react';
import { useEffect ,useState} from 'react';
import useCounter from './Hooks/useCounter';
import Alertcustom from './Hooks/Alert';


const Counter2 = () => {

    let [counter, Setcounter] = useState(0)
    let [open, setOpen] = useState(false)

    useCounter(counter);
    const changeCount = (name)=>{
     Setcounter(counter+1);       
    }
    const changeOpen =(action,customMessage)=> {
        setOpen(action)
    }

    return (
      
        <div>
              <Alertcustom open={open} counter={counter} onClose={changeOpen}/>
            <button onClick={()=>changeCount('akhil')}>Click {counter}</button>
        </div>
    );
}

export default Counter2;