import React from 'react';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function GeeksforGeeks() {

    const notify = () => {

        toast('Hello Geeks')
    }
    return (
        <div className="GeeksforGeeks">
            {

            }
        </div>
    );
}

export default GeeksforGeeks;
