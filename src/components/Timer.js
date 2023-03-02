import React from 'react';
export default function Timer({seconds}) {
    
    return (
        <div className="text-white my-8" >
            <span className='block text-3xl my-3 font-bold '>Starting in </span>
            <span className='block text-2xl '>{5-seconds} seconds</span>
        </div>
    )
}