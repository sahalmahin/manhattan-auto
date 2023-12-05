import { useLoaderData } from 'react-router-dom';
import BrandDetail from './BrandDetail';

const Brand = () => {
   
    const displayCars = useLoaderData();
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mx-4 sm:mx-8 md:mx-16 lg:mx-28 xl:mx-16 mt-28">
            {
                displayCars.slice(0, 4).map((brands, index) => <BrandDetail key={index} brands={brands}></BrandDetail>)
            }
        </div>
    );
};

export default Brand;