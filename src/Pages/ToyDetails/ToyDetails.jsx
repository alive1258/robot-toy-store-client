import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ToyDetails.css'
import { AuthContext } from '../../providers/AuthProviders';


const ToyDetails = () => {
    const { user } = useContext(AuthContext)

    const singleToyDetails = useLoaderData()
    const { toyName, price, quantity, photo, rating, description } = singleToyDetails
    return (
        // <div className='bgimg mt-20 mx-10'>
        <div className='mt-20 mx-10'>
           
            <div className="card w-[590px] glass mx-64 shadow-2xl">
                <div className='w-[590px] h-[590px]' ><img src={photo} alt=""  /></div>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <div>
                        <h3>
                            {
                                user && <>
                                <div className='flex justify-between'>
                                    <h2>Seller Name : {user?.displayName}</h2>
                                    <h2>Seller Email : {user?.email}</h2>
                                </div>
                                </>
                            }
                        </h3>
                    </div>
                    <div className='flex justify-between py-2'>
                       <div>
                       ${price}
                       </div>
                       <div>
                       Quantity: {quantity}
                       </div>
                       <div>
                       Rating: {rating}
                       </div>
                    </div>
                    <p>{description}</p>
                   
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;