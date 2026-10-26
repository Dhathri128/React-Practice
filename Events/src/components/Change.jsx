
const Change = ()=>{
    function handleButton(){
        alert("This is alert msg from browser")
    }

    return(
        <div>
            <button onClick={handleButton}>Button</button>
        </div>
    )
}

export default Change;