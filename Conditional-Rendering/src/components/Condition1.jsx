
const Condition1 = () =>{
    let display;
    const isLoggedIn = true;

    if(isLoggedIn == true){
        display = "welcome to the world of conditions";
    }
    return(
        <div>
            {display}
        </div>
    )
}

export default Condition1;