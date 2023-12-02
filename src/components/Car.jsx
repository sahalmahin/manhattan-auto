import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Car = ({ car }) => {

    const { brand_name, image, logo, id } = car;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='w-full' src={image} alt="" /></figure>
                <div className="card-body">
                    <img className='w-10 h-6 mx-auto mb-5' src={logo} alt="" />
                    <Link to={`/detailPage/${id}`} className='btn font-bold text-lg'>{brand_name} <small className='text-gray-400'>Since 1960</small></Link>
                </div>
            </div>
        </div>
    );
};

export default Car;

Car.propTypes = {
    car: PropTypes.object.isRequired
}