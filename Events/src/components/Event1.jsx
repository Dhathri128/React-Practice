const Event1 =() =>{
    function handleButton(){
        alert('clicked the button!');  // this is going to be displayed in the browser as an alert meassage when user clicks the button Click
    }
    return(
        <div>
            <button onClick={handleButton}>Click</button> // see her we have used onClick attribute that is calling the handleButton function 
        </div>
    )
}
export default Event1;