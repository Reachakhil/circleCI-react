import React, {useEffect,useState} from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';


const Alertcustom = (props) =>{
    let {open,counter,onClose} = {...props};
    return (
        <div>
        {open 
            ?
            <Alert onClose={() => onClose(false,'customMessage')}>{`clicked ${counter} times`}</Alert> : ''}
            </div>
    )
}
export default Alertcustom;