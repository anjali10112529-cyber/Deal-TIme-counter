import React, {useEffect, useState} from 'react';

function Counter(){
    
        const [seconds, setSeconds] = useState(7200);
        const [isActive, setisActive] = useState(false);
        const formatTime = (totalSeconds) => {
            const hrs = Math.floor(totalSeconds/3600);
            const mins = Math.floor((totalSeconds % 3600)/60);
            const secs = totalSeconds % 60;
            return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`; 
        };
        useEffect(()=>{
            let interval = null;
            if(isActive && seconds > 0){
                interval = setInterval(() => {
                    setSeconds (seconds => seconds-1);
                }, 1000);
            }
            return() => clearInterval(interval);
        },[isActive, seconds]);

        const toggleTimer = () =>{
            setisActive(!isActive);
        }

    return(
        <div className='container-fluid bg-light shadow-lg p-5'>
            <button className='rounded btn btn-outline-info mb-3 fw-bold' type='button' onClick={toggleTimer}>
                Start Now
            </button>
            <p className='h3'>The deal will ends in {formatTime(seconds)}</p>
            
        </div>
    );
}
export default Counter;