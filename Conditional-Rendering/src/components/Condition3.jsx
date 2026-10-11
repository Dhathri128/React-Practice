const Condition3 = () =>{
    let display;
    const isLoggedIn = true;

    const LogIn =()=>{
        return "You Are LoggedIn in your account"
    };
    const LogOut = () =>{
        return "You are Logged out from your account"
    };

    if(isLoggedIn == true){
        display = LogOut();
    }
    else{
        display = LogIn();
    }
    
    return(
        <div>
            <button>display</button>
            <button>{display}</button>
        </div>
    )
}

export default Condition3;