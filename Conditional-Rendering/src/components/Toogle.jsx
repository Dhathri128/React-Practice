import { useState } from "react";
const Toogle = () =>{
    const[show, setShow] = useState(false);
    const handleButton = () =>{
        if(show === true){
            setShow(false);
        }
        else{
            setShow(true);
        }
    };
    
    
    return(
        <div>
            <button onClick={handleButton}>{show?"hide" : "show"}</button>
            {show && <p>This is a secret Msg</p>}
        </div>
    );
}
export default Toogle;