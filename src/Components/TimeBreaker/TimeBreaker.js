import React from 'react';

const TimeBreaker = ({ timebreak, clickHandlerToAddBreakTime }) => {
    console.log(timebreak)

    // let total = 0;
    // for (const information of breakTime) {
    //     total = total + information.time;
    // }
    return (
        <div>
            <button onClick={() => clickHandlerToAddBreakTime(timebreak)}>{timebreak.time}</button>
        </div>
    );
};

export default TimeBreaker;