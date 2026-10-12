import { useState } from "react";
const OnChange =() =>{

    const[text,setText] = useState();

    return(
        <div>
            <input 
            type="text"
            id="input"
            placeholder ="Enter your name..."
            onChange ={(e)=> setText(e.target.value)}
            />
            <h2>{text}</h2>
        </div>
    );
}
export default OnChange;