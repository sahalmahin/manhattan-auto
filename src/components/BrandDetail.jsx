import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BrandDetail = ({ brands }) => {

    const { _id, name, type, price, brand, photo, rating } = brands;

    return (
        <div className="card shadow-2xl bg-violet-100">
            <figure className="px-10 pt-10 ">
                <img className='rounded-2xl w-full h-[200px]' src={photo} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">Name: {name}</h2>
                <p className='text-base font-semibold'>Brand Name: {brand}</p>
                <p className='text-base font-semibold'>Type: {type}</p>
                <p className='text-base font-semibold'>Price: {price}</p>
                <p className='text-base font-semibold'>Rating: {rating}</p>
                <div className="card-actions">
                    <Link to={`/singleCar/${_id}`}><button className="btn  font-bold bg-violet-400 border-0">Details</button></Link>
                    <Link to={`/updateCar/${_id}`}><button className="btn border-0 bg-slate-600 text-white ">Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BrandDetail;

BrandDetail.propTypes = {
    brands: PropTypes.object
}