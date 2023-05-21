import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const SingleToyDetails = () => {
  const { user } = useContext(AuthContext);
    // const toyDetails=useLoaderData()
    const toyDetails = useLoaderData()
    const {_id, toyName, price, quantity, pictureUrl, rating, description } = toyDetails
 
    console.log(toyDetails)

    return (
        <div className='mt-20 px-20'>

     <div className="card lg:card-side bg-base-100 shadow-2xl">
  <figure><img className='' src={pictureUrl} alt="Album"/></figure>
  <div className="pt-36 px-6">
  <h4>Seller Name: {user?.displayName}</h4>
                <h4>Seller Email: {user?.email}</h4>
    <h2 className="card-title py-4">{toyName}</h2>
    <p className='mb-4'>${price}</p>
    <p className='mb-4'>Quantity: {quantity}</p>
    <p className='mb-4'>Rating: {rating}</p>
    <p>Description: {description}</p>
   
  </div>
</div>




            
        </div>
    );
};

export default SingleToyDetails;