const AndOperator=() =>{
    const isLoggedIn = false;

    return <div>{isLoggedIn && <button>Logout</button>}</div>
}
export default AndOperator;