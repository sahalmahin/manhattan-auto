import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import MyCart from "./MyCart";
import { useState } from "react";

const Home = () => {

    const loadedCars = useLoaderData();
    const [cars, setCars] = useState(loadedCars);

    return (
        <div>
            <Banner></Banner>

            <div className="grid grid-cols-3 gap-8 mx-16 my-60">
                {
                    cars.map(car => <MyCart 
                        key={car._id} 
                        car={car}
                        cars={cars}
                        setCars={setCars}
                        ></MyCart>)
                }
            </div>

            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;