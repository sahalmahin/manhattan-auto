import PropTypes from 'prop-types';
import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const MyCart = () => {


    const loadedCars = useLoaderData();
    const [cars, setCars] = useState(loadedCars);


    return (
        <div className="grid grid-cols-3 gap-8 mx-16 my-60">
            {
                cars.map(car => <Cart
                    key={car._id}
                    car={car}
                    cars={cars}
                    setCars={setCars}
                ></Cart>)
            }
        </div>
    );
};

export default MyCart;

MyCart.propTypes = {
    car: PropTypes.object,
    cars: PropTypes.array,
    setCars: PropTypes.func
}