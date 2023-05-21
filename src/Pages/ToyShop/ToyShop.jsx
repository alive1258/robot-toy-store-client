import React from 'react';
import { Link } from 'react-router-dom';

const ToyShop = ({toyShop}) => {
    const {_id,toyName,pictureUrl,price,rating}=toyShop || {}
    console.log("id",_id)
    return (
        <div >
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[300px] w-full' src={pictureUrl} alt="" /></figure>
                <div className="px-8 py-8">
                    <h2 className="card-title">{toyName}</h2>
                    <div className='flex justify-between'>
                    <p>${price}</p>
                    <p>Rating : {rating}</p>
                    </div>
                    <div className="mt-4">
                   
                       <Link to={`/singletoy/${_id}`}>
                       <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ">View Details</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyShop;