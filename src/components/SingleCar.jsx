import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCar = () => {

    const carId = useLoaderData();

    const handleAddCar = () => {
        fetch(`http://localhost:5000/carDetail/${carId._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carId)
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
                }
            })
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${carId.photo})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 font-bold text-3xl">Ownership: {carId.name}</h1>
                    <p className="mb-5 font-bold">Founded Date: {carId.brand}</p>
                    <p className="mb-5 font-bold">Headquarters: {carId.type}</p>
                    <p className="mb-5 font-bold">Employees: {carId.price}</p>
                    <p className="mb-5 font-bold">Motto: {carId.rating}</p>
                    <button onClick={() => handleAddCar(carId)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCar;