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

/* see here the value of x displays as zero only , even we click the button "click" displayed on the browser 
but we can observe the change in console so i have written console.log(x); statement 
This is disadvantage with varaibles in React - the updated value didn't displayed/rendered on the broswer 
*/

//So new concept dicovered in react that is useState