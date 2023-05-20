import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys=useLoaderData()
 

    return (
        <div>
            <h1 className='text-4xl text-center py-8'>All Toys : {allToys.length}</h1>
            <div className="overflow-x-auto w-full px-20">
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
                        {/* row 1 */}
                       

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllToys;