import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Detail = ({ detail }) => {

    const { id, image, name, brand_name, type, price, rating, details_button, update_button } = detail;
    console.log(id);

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

            <div className='grid grid-cols-2 gap-20 mx-auto'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{brand_name}</p>
                        <p>{type}</p>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <div className="card-actions">
                            <Link to={`/carDetail/${id}`}><button className="btn btn-primary">{details_button}</button></Link>
                            <button className="btn btn-primary">{update_button}</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{brand_name}</p>
                        <p>{type}</p>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <div className="card-actions">
                        <Link to={`/carDetail/${id}`}><button className="btn btn-primary">{details_button}</button></Link>
                            <button className="btn btn-primary">{update_button}</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{brand_name}</p>
                        <p>{type}</p>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <div className="card-actions">
                        <Link to={`/carDetail/${id}`}><button className="btn btn-primary">{details_button}</button></Link>
                            <button className="btn btn-primary">{update_button}</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{brand_name}</p>
                        <p>{type}</p>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <div className="card-actions">
                        <Link to={`/carDetail/${id}`}><button className="btn btn-primary">{details_button}</button></Link>
                            <button className="btn btn-primary">{update_button}</button>
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