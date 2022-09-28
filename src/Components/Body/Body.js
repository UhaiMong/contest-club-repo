import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Body.css'

const Body = () => {
    const [informations, setInformation] = useState([]);
    
    useEffect(() => {
        fetch('information.json').then(res => res.json()).then(data => setInformation(data))
    },[])
    return (
        <div className='container'>
            <div className='cart-container'>
                {
                    informations.map(information => <SingleCart
                        key={information.id}
                        information = {information}
                    >
                        
                    </SingleCart>)
                }
            </div>

            <div>
                <h3>activity log.</h3>
            </div>
        </div>
    );
};

export default Body;