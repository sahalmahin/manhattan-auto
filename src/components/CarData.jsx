import PropTypes from 'prop-types';

const CarData = ({carData}) => {

    const { name, type, price, brand, photo, rating } = carData;
    

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${photo})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 font-bold text-3xl">Ownership: {name}</h1>
                    <p className="mb-5 font-bold">Founded Date: {brand}</p>
                    <p className="mb-5 font-bold">Headquarters: {type}</p>
                    <p className="mb-5 font-bold">Employees: {price}</p>
                    <p className="mb-5 font-bold">Motto: {photo}</p>
                    <p className="mb-5 font-bold">Motto: {rating}</p>
                </div>
            </div>
        </div>
    );
};

export default CarData;

CarData.propTypes = {
    carData: PropTypes.object
}