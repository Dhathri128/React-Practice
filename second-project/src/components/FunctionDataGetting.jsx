
function FunctionDataGetting() {
    const getGreeting = ()=>{
        return "this is the value returing from a function";
    };
    const result = getGreeting();

    const getNumber = () => {
    return 100;
    };

    return(
        <div>
            {result}
            <br></br>
            {getNumber()}
        </div>
    )
}

export default FunctionDataGetting

/*

function FunctionDataGetting() {
    const getGreeting = () => {
        return "this is the value returning from a function";
    };

    return (
        <div>
            {getGreeting()}
        </div>
    );
}

export default FunctionDataGetting;
*/


