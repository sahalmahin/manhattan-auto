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
                    <h3 className="text-6xl font-medium leading-tight">NOW IT`S EASY <br /> FOR YOU <br /> TO RENT <br /> A CAR</h3>
                    <p className="text-xl text-gray-500 my-3 font-semibold">100 Luxury cars from multi brands are always for you</p>
                    <button className="btn bg-violet-400 text-black font-bold">Start Booking</button>
                </div>
                <div>
                    <img className="w-[600px] h-[600px]" src="https://i.ibb.co/yq9QN6Y/banner-img.png" alt="" />
                </div>
            </section>
            <div>
                <h1 className="text-4xl text-center italic text-violet-700 font-extrabold my-16 px-10">JUST TAKE A LOOK AT OUR MULTIPLE BRANDS OF CARS</h1>
            </div>
            <div className="grid grid-cols-3 gap-14 mx-36">
                {
                    cars.map(car => <Car key={car.id} car={car}></Car>)
                }
            </div>
            <section className="flex justify-center items-center gap-9 my-32">
                <div>
                    <img className="w-[600px] h-[600px] rounded-2xl" src="https://i.ibb.co/P5yfKkB/67377.jpg" alt="" />
                </div>
                <div className="shadow-2xl p-10 rounded-2xl">
                    <h3 className="text-6xl font-medium leading-tight">We provide <br /> premium car with  <br /> high quality</h3>
                    <p className="text-xl text-violet-700 my-4 font-semibold">CERTIFICATED BY GURUS</p>
                    <p className=" text-gray-700 font-semibold">Our company was built by trust and reputation. <br /> We know how to make our customers love us by <br /> our high quality products with affordable prices.<br />We promise to make you have the interesting experiences.</p>
                </div>
            </section>
            <h2 className="text-6xl font-semibold text-violet-700 text-center">Why Choose US?</h2>
            <section className="gap-9 m-auto grid grid-cols-2 mb-60 mt-8 mx-12">
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Interactive Displays: </h6>Incorporate interactive displays showcasing the features and technologies of your vehicles. Allow customers to explore specifications, configurations, and customization options.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Test Drive Center: </h6>Provide a dedicated space for test drives, allowing potential customers to experience the vehicles firsthand. Ensure a comfortable waiting area for customers before and after their test drive.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Expert Consultation </h6>Services: Employ knowledgeable sales staff who can provide expert advice and guidance on vehicle selection, financing options, and additional services.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Service Center </h6>Visibility: If your showroom is part of a larger dealership, consider providing a view into the service center, demonstrating your commitment to transparency and quality service.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Educational Workshops: </h6>Host periodic workshops or seminars on automotive topics, including maintenance tips, new technologies, and safety features. This can engage customers and build a sense of community.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Branded Merchandise </h6>Store: Sell branded merchandise such as clothing, accessories, or collectibles related to your automotive brand, allowing customers to take a piece of your brand home with them.</div>
                </div>
            </section>
        </div>
    );
};

export default Banner;