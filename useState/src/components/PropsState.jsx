import UseState from "./UseState";
import {useState } from 'react';
import PropsStateChild from "./PropsStateChild";
const PropsState= () =>{
    const[count,setCount] = useState(0);

    return(
        <div>
            <p>{count}</p>
            <PropsStateChild count = {count} Counter = {setCount}/>
        </div>
    )
};

export default PropsState;

