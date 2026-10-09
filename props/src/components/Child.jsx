const Child = (prop) => {
    return(
        <div>
            <p>{prop.name}</p>
            <p>{prop.age}</p>
            <p>{prop.country}</p>
        </div>
    );
};

export default Child;