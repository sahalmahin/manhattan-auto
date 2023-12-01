import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddCar = e => {
        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const newCar = { name, brand, type, price, photo, rating, description };
        console.log(newCar);

        fetch('http://localhost:5000/car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
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
            <h2 className="text-center my-8 text-3xl font-extrabold">Please Add Your Car!</h2>
            <form onSubmit={handleAddCar}>
                {/* form Name and Quantity Row */}
                <div className="md:flex mb-8 gap-5">
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Car :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Car Name" name="name" />
                    </div>
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Brand :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Brand Name" name="brand" />
                    </div>
                </div>
                {/* form Supplier Row */}
                <div className="md:flex mb-8 gap-5">
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Type :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Type" name="type" />
                    </div>
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Price :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Price" name="price" />
                    </div>
                </div>
                {/* form Category & Details Row */}
                <div className="md:flex mb-8 gap-5">
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Photo Url :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Url" name="photo" />
                    </div>
                    <div className="join md:w-1/2">
                        <p className="w-1/4 my-auto font-bold text-xl">Rating :</p>
                        <input className="input input-bordered join-item w-3/4" type="text" placeholder="Rating" name="rating" />
                    </div>
                </div>
                {/* form Photo Row */}
                <div className="mb-8">
                    <div className="join w-full">
                        <p className="w-1/4 my-auto font-bold text-xl">Description :</p>
                        <input className="input input-bordered join-item  w-full" type="text" placeholder="Description" name="description" />
                    </div>
                </div>
                <input type="submit" value='Add Car' className="btn btn-block bg-slate-400 font-bold text-xl " />
            </form>
        </div>
    );
};

export default AddProduct;