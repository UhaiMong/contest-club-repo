import React from 'react';

const TimeBreaker = ({ timebreak }) => {
    console.log(timebreak)
    // const [id, time] = timebreak;
    return (
        <div>
            <button>{timebreak.time}</button>
        </div>
    );
};

export default TimeBreaker;