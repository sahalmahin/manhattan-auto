import PropTypes from 'prop-types';

const Info = ({ info }) => {

    const { owners, founded_date, headquarters, employees, motto, image } = info;

    const handleAddCar = () => {
        fetch('http://localhost:5173/carDetail/:id', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ owners, founded_date, headquarters, employees, motto, image })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 font-bold text-3xl">Ownership: {owners}</h1>
                    <p className="mb-5 font-bold">Founded Date: {founded_date}</p>
                    <p className="mb-5 font-bold">Headquarters: {headquarters}</p>
                    <p className="mb-5 font-bold">Employees: {employees}</p>
                    <p className="mb-5 font-bold">Motto: {motto}</p>
                    <button onClick={handleAddCar} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-bold">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Info;

Info.propTypes = {
    info: PropTypes.object
}