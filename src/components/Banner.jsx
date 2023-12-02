import { useEffect, useState } from "react";
import Car from "./Car";

const Banner = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div className="">

            <section className="flex justify-center items-center">
                <div>
                    <h3 className="text-6xl">NOW IT`S EASY <br /> FOR YOU <br /> TO RENT <br /> A CAR</h3>
                    <p className="text-xl">100 Luxury cars from multi brands are always for you</p>
                    <button className="btn bg-blue-600 text-white">Start Booking</button>
                </div>
                <div>
                    <img className="w-[600px] h-[600px]" src="https://i.ibb.co/yq9QN6Y/banner-img.png" alt="" />
                </div>
            </section>
            <div className="grid grid-cols-3 gap-20 mx-auto">
                {
                    cars.map(car => <Car key={car.id} car={car}></Car>)
                }
            </div>
            <section className="flex justify-center items-center gap-9 m-auto">
                <div>
                    <img className="w-[600px] h-[600px]" src="https://i.ibb.co/P5yfKkB/67377.jpg" alt="" />
                </div>
                <div className="shadow-2xl p-10">
                    <h3 className="text-6xl">We provide <br /> premium car with  <br /> high quality</h3>
                    <p className="text-xl text-blue-700">CERTIFICATED BY GURUS</p>
                    <p className=" text-gray-700">Our company was built by trust and reputation. <br /> We know how to make our customers love us by <br /> our high quality products with affordable prices.<br />We promise to make you have the interesting experiences.</p>
                </div>
            </section>
            <h2 className="text-6xl font-semibold text-center my-8">Why Choose US?</h2>
            <section className="gap-9 m-auto grid grid-cols-2  mx-12">
                <div className="shadow-2xl p-10 rounded-full">
                    <p className=" text-gray-700 text-lg font-bold">Interactive Displays: Incorporate interactive displays showcasing the features and technologies of your vehicles. Allow customers to explore specifications, configurations, and customization options.</p>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <p className=" text-gray-700 text-lg font-bold">Test Drive Center: Provide a dedicated space for test drives, allowing potential customers to experience the vehicles firsthand. Ensure a comfortable waiting area for customers before and after their test drive.</p>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <p className=" text-gray-700 text-lg font-bold">Expert Consultation Services: Employ knowledgeable sales staff who can provide expert advice and guidance on vehicle selection, financing options, and additional services.</p>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <p className=" text-gray-700 text-lg font-bold">Service Center Visibility: If your showroom is part of a larger dealership, consider providing a view into the service center, demonstrating your commitment to transparency and quality service.</p>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <p className=" text-gray-700 text-lg font-bold">Educational Workshops: Host periodic workshops or seminars on automotive topics, including maintenance tips, new technologies, and safety features. This can engage customers and build a sense of community.</p>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <p className=" text-gray-700 text-lg font-bold">Branded Merchandise Store: Sell branded merchandise such as clothing, accessories, or collectibles related to your automotive brand, allowing customers to take a piece of your brand home with them.</p>
                </div>
            </section>
        </div>
    );
};

export default Banner;