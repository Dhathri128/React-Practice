
import "./ProfileCard.css"
const ProfileCard = ()=>{
    
        const name = "Dhathri";
        const age = 20;
        const country = "India";

        return (
            <div className= "card">
                <h3>Name : {name}</h3>
                <p>Age : {age}</p>
                <p>Country : {country}</p>
            </div>
        )
};

export default ProfileCard;