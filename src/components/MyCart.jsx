import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = ({ car, cars, setCars }) => {

    const { _id, name, brand, type, price, photo, rating } = car;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/car/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = cars.filter(car => car._id !== _id);
                            setCars(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={photo} className='w-full h-[200px]' alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} {type} {price} {brand} {rating}</h2>
                <p className='text-sm font-medium text-gray-500'>Congratulations on your new car! 🚗✨ Wishing you countless miles of joy, adventure, and unforgettable moments on the road. May your journey be smooth and filled with wonderful memories. Happy driving! 🎉👏 #NewCarJoy</p>
                <div className="card-actions items-center justify-center">
                    <p className='font-extrabold'>Want to Delete ? Click This Button!</p>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white ">X</button>
                    <Link to={`updateCar/${_id}`}><button className="btn bg-orange-600 text-white ">Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyCart;

MyCart.propTypes = {
    car: PropTypes.object,
    cars: PropTypes.array,
    setCars: PropTypes.func
}