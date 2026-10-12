const Event2=() =>{
    function handleButton(name){
        alert('hello${name}');
    }
    return(
        <div>
            <button onClick={()=>handleButton("Karanam")}>Click</button>
        </div>
    )
}

export default Event2;