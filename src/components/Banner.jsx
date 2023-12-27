import { useEffect, useState } from "react";
import Car from "./Car";

const Banner = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://reset-assignment-10-server-g5vf71x3o-sahal-mahins-projects.vercel.app/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className="">
            <div>
                <h1 className="text-4xl text-center italic text-violet-700 font-extrabold my-16 px-10">JUST TAKE A LOOK AT OUR MULTIPLE BRANDS OF CARS</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 mx-6 sm:mx-8 md:mx-16 lg:mx-36">
                {
                    cars.slice(0, 6).map((car,index) => <Car key={index} car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default Banner;