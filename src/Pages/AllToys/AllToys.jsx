import React, { useEffect, useState } from 'react';
import Toys from '../Toys/Toys';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys=useLoaderData()
    // const [allProducts,setAllProducts]=useState([])
    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res=>res.json())
    //     .then(data=>setAllProducts(data))
    // },[])
    // const url = 'http://localhost:5000/addToys?email=zamirulkabir999@gmail.com&sort=1'
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setToys(data))
    // }, [])



    return (
        <div>
            <h1 className='text-4xl text-center py-8'>All Toys {allToys.length}</h1>
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