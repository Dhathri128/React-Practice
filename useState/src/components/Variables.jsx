
import { useState } from 'react';

const Variables = () => {
    let x = 0;

    const clickButton = () => {
        x = x + 1;
        console.log(x);
    };

    return (
        <div>
            <p>{x}</p>
            <button onClick={clickButton}>Click</button>
        </div>
    );
};

export default Variables;
