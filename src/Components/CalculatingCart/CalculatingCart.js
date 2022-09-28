import React from 'react';
import '../Body/Body.css'

const CalculatingCart = ({ count }) => {
    return (
        <div>
                <h3>Add a break time: </h3>
                <div className='time-container breaker'>
                    <button>
                        10s
                    </button>

                    <button>
                        20s
                    </button>

                    <button>
                        30s
                    </button>

                    <button>
                        40s
                    </button>

                </div>
                <h3>Contest Details</h3>
                <div className='time-container'>
                    <h4>Time count: {count.length} min</h4>
                </div>

                <div className='time-container'>
                    <h4>Time count: {count.length} min</h4>
                </div>
            </div>
    );
};

export default CalculatingCart;