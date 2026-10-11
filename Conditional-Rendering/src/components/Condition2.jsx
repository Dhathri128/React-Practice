
const Condition2 = () =>{
    const isLoggedIn = false;

    let display;

    if(isLoggedIn == true){
        display = "logout";
    }
    else{
        display = "login";
    }

    return(
        <div>
            <button>{display}</button>
        </div>
    )
}

export default Condition2;