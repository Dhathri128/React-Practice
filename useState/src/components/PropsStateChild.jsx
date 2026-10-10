import UseState from "./UseState";
const PropsStateChild = ({count, Counter})=>{
    const clickButton =() =>{
        Counter(count+1);
    };
    return(
        <div>
            <button onClick={clickButton}>click</button>
        </div>
    )

};
export default PropsStateChild;


