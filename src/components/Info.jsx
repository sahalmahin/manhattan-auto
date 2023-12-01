import PropTypes from 'prop-types';

const Info = ({ info }) => {

    const { owners, founded_date, headquarters, employees, motto, image } = info;
    console.log(owners, founded_date, headquarters, employees, motto);

    return (
        <div className="hero min-h-screen" style={{backgroundImage: `url(${image})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl font-bold">{owners}</h1>
                    <p className="mb-5">{founded_date}</p>
                    <p className="mb-5">{headquarters}</p>
                    <p className="mb-5">{employees}</p>
                    <p className="mb-5">{motto}</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Info;

Info.propTypes = {
    info: PropTypes.object
}