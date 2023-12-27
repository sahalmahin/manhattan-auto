import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BannerCar = ({ cars }) => {

    const { _id, brand_name, image } = cars;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-full h-[200px]' src={image} alt="car" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <div className="card-actions mx-auto">
                        <Link to={`/brand/${_id}`}>
                            <button className='btn font-bold text-lg'>{brand_name}</button>
                        </Link>
                    </div>
                </h2>
            </div>
        </div>
    );
};

export default BannerCar;

BannerCar.propTypes = {
    cars: PropTypes.object.isRequired
}