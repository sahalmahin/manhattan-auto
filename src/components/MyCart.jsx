import Cart from './Cart';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const MyCart = () => {

    const loadedCars = useLoaderData();
    const [cars, setCars] = useState(loadedCars);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-16 xl:mx-16 mt-8">
            {
                cars.map((car, index) => <Cart
                    key={index}
                    car={car}
                    cars={cars}
                    setCars={setCars}
                ></Cart>)
            }
        </div>
    );
};

export default MyCart;