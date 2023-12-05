import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import BannerCar from "./BannerCar";

const Home = () => {

    const brand = useLoaderData();

    return (
        <div>
            <div>
                {/* Banner Section */}
                <section className="flex flex-col xs:flex-row sm:flex-row lg:flex-row justify-center items-center">
                    <div className="text-center sm:text-left sm:mr-8">
                        <h3 className="text-4xl sm:text-6xl font-medium leading-tight">NOW IT`S EASY <br /> FOR YOU <br /> TO RENT <br /> A CAR</h3>
                        <p className="text-lg sm:text-xl text-gray-500 my-3 font-semibold">100 Luxury cars from multi brands are always for you</p>
                        <button className="btn bg-violet-400 text-black font-bold">Start Booking</button>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <img className="w-full sm:w-[600px] h-auto" src="https://i.ibb.co/yq9QN6Y/banner-img.png" alt="" />
                    </div>
                </section>
                {/* Car Section */}
                <h1 className="text-4xl text-center italic text-violet-700 font-extrabold my-16 px-10">JUST TAKE A LOOK AT OUR MULTIPLE BRANDS OF CARS</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 mx-6 sm:mx-8 md:mx-16 lg:mx-36">
                {
                    brand.slice(0, 6).map((cars, index) => <BannerCar key={index} cars={cars}></BannerCar>)
                }
            </div>
            {/* Facilities Section */}
            <section className="flex flex-col sm:flex-row justify-center items-center gap-10 my-32">
                <div className="mb-6 sm:mb-0 sm:mr-0 ">
                    <img className="w-[550px] rounded-2xl" src="https://i.ibb.co/P5yfKkB/67377.jpg" alt="" />
                </div>
                <div className="shadow-2xl p-6 sm:p-10 rounded-2xl">
                    <h3 className="text-4xl sm:text-6xl font-medium leading-tight">We provide <br /> premium car with <br /> high quality</h3>
                    <p className="text-lg sm:text-xl text-violet-700 my-4 font-semibold">CERTIFIED BY GURUS</p>
                    <p className="text-base sm:text-lg text-gray-700 font-semibold">Our company was built by trust and reputation. <br /> We know how to make our customers love us by <br /> our high quality products with affordable prices.<br />We promise to make you have the interesting experiences.</p>
                </div>
            </section>

            {/* Service Section */}

            <h2 className="text-6xl font-semibold text-violet-700 text-center">Why Choose US ?</h2>
            <section className="gap-9 m-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-16 mt-8 mx-4 sm:mx-8 md:mx-12 lg:mx-12">
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Interactive Displays: </h6>Incorporate interactive displays showcasing the features and technologies of your vehicles. Allow customers to explore specifications, configurations, and customization options.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Test Drive Center: </h6>Provide a dedicated space for test drives, allowing potential customers to experience the vehicles firsthand. Ensure a comfortable waiting area for customers before and after their test drive.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Expert Consultation </h6>Employee knowledgeable sales staff who can provide expert advice and guidance on vehicle selection, financing options, and additional services.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Service Center </h6>If your showroom is part of a larger dealership, consider providing a view into the service center, demonstrating your commitment to transparency and quality service.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Educational Workshops: </h6>Host periodic workshops or seminars on automotive topics, including maintenance tips, new technologies, and safety features. This can engage customers and build a sense of community.</div>
                </div>
                <div className="shadow-2xl p-10 rounded-full">
                    <div className=" text-gray-700 text-lg font-bold"><h6 className="font-bold text-violet-700 border-b-2 text-xl text-center">Branded Merchandise </h6>Sell branded merchandise such as clothing, accessories, or collectibles related to your automotive brand, allowing customers to take a piece of your brand home with them.</div>
                </div>
            </section>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;