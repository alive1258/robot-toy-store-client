import React from 'react';

const ToyShop = ({toyShop}) => {
    const {toyName,pictureUrl,price,rating}=toyShop || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-[300px]' src={pictureUrl} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyShop;