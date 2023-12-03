import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCar = () => {

    const car = useLoaderData();

    const { _id, name, brand, type, price, photo, rating } = car;

    const handleUpdateCar = e => {
        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const updatedCar = { name, brand, type, price, photo, rating };

        fetch(`http://localhost:5000/car/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car added successfully',
                        icon: 'success',
                        confirmButtonText: 'Go Ahead'
                    })
                }
            })
    }

    return (
        <div className="bg-gray-200 p-24">
            <h2 className="text-center my-8 text-3xl font-extrabold">Update Car</h2>
            <form onSubmit={handleUpdateCar}>
                <div className="md:flex mb-8 gap-5">
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Car :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Car Name" name="name" defaultValue={name} />
                    </div>
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Brand :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Brand Name" name="brand" defaultValue={brand} />
                    </div>
                </div>
                <div className="md:flex mb-8 gap-5">
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Type :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Type" name="type" defaultValue={type} />
                    </div>
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Price :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Price" name="price" defaultValue={price} />
                    </div>
                </div>
                <div className="md:flex mb-8 gap-5">
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Photo Url :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Url" name="photo" defaultValue={photo} />
                    </div>
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Rating :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Rating" name="rating" defaultValue={rating} />
                    </div>
                </div>
                <input type="submit" value='Update Car' className="btn btn-block bg-slate-400 font-bold text-xl " />
            </form>
        </div>
    );
};

export default UpdateCar;