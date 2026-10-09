
function FunctionDataGetting() {
    const getGreeting = ()=>{
        return "this is the value returing from a function";
    };
    const result = getGreeting();

    return(
        <div>
            
            {result}
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


