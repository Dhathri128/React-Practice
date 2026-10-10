import { useState } from "react";
const UseState= () =>{
    const[count,setCount] = useState(0);
    const clickButton = () =>{
        setCount(count+1);
    };

    return(
        <div>
            <h3>count</h3>
            <p>{count}</p>
            <button onClick={clickButton}>click</button>
        </div>
    )
};

export default UseState;