import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    // const toyDetails=useLoaderData()
    const toyDetails = useLoaderData()
    const {_id, toyName, price, quantity, pictureUrl, rating, description } = toyDetails
 
    console.log(toyDetails)

    return (
        <div className='mt-20 px-20'>
     <div className="card lg:card-side bg-base-100 shadow-2xl">
  <figure><img src={pictureUrl} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toyName}</h2>
    <p>${price}</p>
    <p>Quantity: {quantity}</p>
    <p>Rating: {rating}</p>
    <p>Description: {description}</p>
    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>



{/* <div className='px-20'>
<div className="card bg-base-100 shadow-2xl">
  <img src={pictureUrl} alt="" />
  <div className="card-body">
    <h2 className="card-title">ToyName: {toyName}</h2>
    <p>${price}</p>
    <p>Quantity: {quantity}</p>
    <p>Rating: {rating}</p>
    <p>Description: {description}</p>
  
  </div>
</div>
</div>
             */}
            
        </div>
    );
};

export default SingleToyDetails;