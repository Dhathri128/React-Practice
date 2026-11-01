import { useState } from "react"

const EventSubmit = () =>{
    
    const[text,setText] = useState(" ")
    function handleButton(){
        alert("Form submitted successfully!");
    } 
    return(
        <div>
           <form onSubmit={handleSubmit}>
           <input
           type="text" 
           placeholder="Enter your name" 
           />

            <button type="submit">Submit</button>
        </form>
        </div>
    )
    
}

export default EventSubmit;
