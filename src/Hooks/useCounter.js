import React, { useEffect } from 'react';

const useCounter = (count)=>{
    useEffect(()=>{
        document.title = `count ${count}`;
    },[count])
}
export default useCounter;