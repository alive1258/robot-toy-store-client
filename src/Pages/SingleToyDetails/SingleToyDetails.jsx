import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyDetails = () => {
    // const toyDetails=useLoaderData()
    const toyDetails = useLoaderData()
    const {_id, toyName, price, quantity, photo, rating, description } = toyDetails
 
    console.log(toyDetails)

    return (
        <div>
            SingleToyDetails:{toyName}


<div>
<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toyName}</h2>
    <p>{price}</p>
    <p>{quantity}</p>
    <p>{rating}</p>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
</div>
            
            
        </div>
    );
};

export default SingleToyDetails;