
import pizza from '../assets/pizza.webp';
import ChildPizza from './ChildPizza';

const ParentPizza = () => {
    const title = "Pizza";
    const price = 300;

    return (
        <div>
            <ChildPizza pizza={pizza} title={title} price={price} />
        </div>
    );
};

export default ParentPizza;