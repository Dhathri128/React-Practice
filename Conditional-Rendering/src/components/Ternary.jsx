
const Ternary =() =>{
    const isLoggedIn = false;

    return(
        <div>
            {isLoggedIn?<button>Logout</button>:<button>LogIn</button>}
        </div>
    )
}

export default Ternary;