import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Detail = ({ detail }) => {

    const { id, image, name, brand_name, type, price, rating, details_button, update_button } = detail;

    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/M1d6yrt/mercedes.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/FD26pkY/toyota.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/km0pMTT/porche.png" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-20 mx-48 my-20'>
                <div className="card shadow-2xl bg-violet-100">
                    <figure className="px-10 pt-10 ">
                        <img className='rounded-2xl' src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Name: {name}</h2>
                        <p className='text-base font-semibold'>Brand Name: {brand_name}</p>
                        <p className='text-base font-semibold'>Type: {type}</p>
                        <p className='text-base font-semibold'>Price: {price}</p>
                        <p className='text-base font-semibold'>Rating: {rating}</p>
                        <div className="card-actions">
                            <Link to={`/carDetail/${id}`}><button className="btn  font-bold bg-violet-400 border-0">{details_button}</button></Link>
                            <Link to={'/updateCar'}><button className="btn  font-bold bg-violet-400 border-0">{update_button}</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl bg-violet-100">
                    <figure className="px-10 pt-10 ">
                        <img className='rounded-2xl' src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Name: {name}</h2>
                        <p className='text-base font-semibold'>Brand Name: {brand_name}</p>
                        <p className='text-base font-semibold'>Type: {type}</p>
                        <p className='text-base font-semibold'>Price: {price}</p>
                        <p className='text-base font-semibold'>Rating: {rating}</p>
                        <div className="card-actions">
                            <Link to={`/carDetail/${id}`}><button className="btn  font-bold bg-violet-400 border-0">{details_button}</button></Link>
                            <Link to={'/updateCar'}><button className="btn  font-bold bg-violet-400 border-0">{update_button}</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl bg-violet-100">
                    <figure className="px-10 pt-10 ">
                        <img className='rounded-2xl' src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Name: {name}</h2>
                        <p className='text-base font-semibold'>Brand Name: {brand_name}</p>
                        <p className='text-base font-semibold'>Type: {type}</p>
                        <p className='text-base font-semibold'>Price: {price}</p>
                        <p className='text-base font-semibold'>Rating: {rating}</p>
                        <div className="card-actions">
                            <Link to={`/carDetail/${id}`}><button className="btn  font-bold bg-violet-400 border-0">{details_button}</button></Link>
                            <Link to={'/updateCar'}><button className="btn  font-bold bg-violet-400 border-0">{update_button}</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card shadow-2xl bg-violet-100">
                    <figure className="px-10 pt-10 ">
                        <img className='rounded-2xl' src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Name: {name}</h2>
                        <p className='text-base font-semibold'>Brand Name: {brand_name}</p>
                        <p className='text-base font-semibold'>Type: {type}</p>
                        <p className='text-base font-semibold'>Price: {price}</p>
                        <p className='text-base font-semibold'>Rating: {rating}</p>
                        <div className="card-actions">
                            <Link to={`/carDetail/${id}`}><button className="btn  font-bold bg-violet-400 border-0">{details_button}</button></Link>
                            <Link to={'/updateCar'}><button className="btn  font-bold bg-violet-400 border-0">{update_button}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;

Detail.propTypes = {
    detail: PropTypes.object
}