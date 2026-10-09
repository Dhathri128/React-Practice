
function DynamicData() {
    const GetttingDate = () => {
        const date = new Date().getDate();
        return date;
    };

    const GettingYear =() => {
        const currentYear = new Date().toLocaleDateString();
        return currentYear;
    };
    return (
        <div>
            {GettingYear()}
            <br></br>
            {GetttingDate()}
        </div>
    );
}

export default DynamicData;

