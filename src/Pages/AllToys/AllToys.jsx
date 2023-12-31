import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';

const AllToys = () => {
    UseTitle("All Toy")
    const allToys=useLoaderData()
   
 

    return (
        <div>
            <h1 className='text-4xl text-center py-8'>All Toys : {allToys.length}</h1>
            <div className='text-center'>
            <input type="text"    placeholder="Search Product" className="input input-bordered input-accent w-full max-w-xs" />
             
                <button className='pl-2'>Search</button>
            </div>
            <div className="overflow-x-auto w-full md:px-20">
                <table className="table w-full mt-10">
                    {/* head */}
                    <thead>
                        <tr>
                          
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allToys.map(allToy=><Toys
                                 key={allToy._id}
                                 allToy={allToy}
                            ></Toys>)
                        }
                    
                       

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllToys;