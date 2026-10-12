const Event1 =() =>{
    function handleButton(){
        alert('clicked the button!');
    }
    return(
        <div>
            <button onClick={handleButton}>Click</button>
        </div>
    )
}
export default Event1;