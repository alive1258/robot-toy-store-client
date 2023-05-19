import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';

const AllToys = () => {
    const [allProducts,setAllProducts]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setAllProducts(data))
    },[])



    return (
        <div>
            <h1 className='text-4xl text-center py-8'>All Toys</h1>
            <div className="overflow-x-auto w-full">
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
                            allProducts.map(allProduct=><Toys
                                 key={allProduct}
                                 allProduct={allProduct}
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