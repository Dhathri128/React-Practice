
import './ChildPizza.css';

const ChildPizza = (props) => {
    return (
        <div className="card">
            <img
                className="card-img"
                src={props.pizza}
                alt={props.title}
            />

            <h3 className="card-h3">
                {props.title}
            </h3>

            <p>Price: ₹{props.price}/-</p>

            <button>Order Now</button>
        </div>
    );
};

export default ChildPizza;