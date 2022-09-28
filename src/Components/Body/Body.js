import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Body.css'

const Body = () => {
    const [informations, setInformation] = useState([]);

    const [count, setCount] = useState([])

    useEffect(() => {
        fetch('information.json').then(res => res.json()).then(data => setInformation(data))
    }, [])

    const clickHandlerToSelect = (information) => {
        console.log(information);
        const newCount = [...count, information];
        setCount(newCount);
    }
    return (
        <div className='container'>
            <div className='cart-container'>
                {
                    informations.map(information => <SingleCart
                        key={information.id}
                        information={information}
                        clickHandlerToSelect={clickHandlerToSelect}
                    >

                    </SingleCart>)
                }
            </div>

            <div className='calculating-container'>
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
        </div>
    );
};

export default Body;