import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCar = () => {

    const carId = useLoaderData();

    const { brand_name, image, name, type, price, rating, _id } = carId;

    const car = { brand_name, image, name, type, price, rating };

    const handleAddCar = () => {
        fetch(`https://reset-assignment-10-server-g5vf71x3o-sahal-mahins-projects.vercel.app/carDetail/${_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car Added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    console.log(data);
                }
            })
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 font-bold text-3xl">Ownership: {name}</h1>
                    <p className="mb-5 font-bold">Founded Date: {brand_name}</p>
                    <p className="mb-5 font-bold">Headquarters: {type}</p>
                    <p className="mb-5 font-bold">Employees: {price}</p>
                    <p className="mb-5 font-bold">Motto: {rating}</p>
                    <button onClick={() => handleAddCar(car)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;