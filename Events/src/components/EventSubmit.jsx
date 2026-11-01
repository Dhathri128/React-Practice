import { useState } from "react"

const EventSubmit = () =>{
    
    const[text,setText] = useState(" ")
    const[submittedName, setsubmittedName] = useState(" ")
    function handleSubmit(event){
        event.preventDefault();
        setsubmittedName(text);
        alert("Form submitted successfully!");

    } 

    function typing(event){
        setText(event.target.value)
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
           <input
           type="text" 
           placeholder="Enter your name" 
           onChange={typing}
           />

            <button type="submit">Submit</button>
        </form>
        <h1>{submittedName}</h1>
        </div>
    )
    
}

export default EventSubmit;
