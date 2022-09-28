import React from 'react';

const QA = () => {
    return (
        <div>
            <ol>
                <li>
                    How does react work?
                </li>
                <code>React work</code><br></br>
                
                    <strong>
                        unidirectional.
                </strong>
                
                <li>Write a short note different between props and state</li>
                <code>props vs state</code><br />
                <strong>
                    props can pass a function,event handler,data and object.<br/>
                    state can change data from user interact.
                </strong>
                
                <li>
                    useEffect different use except data load.
                </li>
                <code>useEffect</code><br />
                
                <strong>
                    componentDidMount<br/>
                    componentDidUpdate<br/>
                    componentWillUnmount
                </strong>
            </ol>
        </div>
    );
};

export default QA;