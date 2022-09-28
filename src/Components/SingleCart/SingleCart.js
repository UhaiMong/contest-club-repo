import React from 'react';
import './SingleCart.css'

const SingleCart = (props) => {
    const {img_link,title,description,time} = props.information
    return (
        <div className='cart'>
            <div>
                <img src={img_link} alt="/img" />
                <h2>{title}</h2>
                <p>{description}</p>
                <strong>Time: {time}</strong>
            </div>
            <button className='btn-select'>Select</button>
        </div>
    );
};

export default SingleCart;