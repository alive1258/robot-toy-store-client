import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
// import MyToyRow from './MyToyRow';
import { useLoaderData } from 'react-router-dom';
import MyToysRow from '../MyToysRow/MyToysRow';

const MyToys = () => {
    // const allToy = useLoaderData()
    // console.log('alltoy',allToy)
    // const [toys, setToys] = useState([])
    // console.log("toys",toys)

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
   

    const url = `http://localhost:5000/addToys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    return (
        <div>
            <h1 className='mt-10 mb-6 text-4xl text-center'>My Toys:{myToys.length}</h1>

            <div className='flex justify-center gap-6'>
                sellerInfo:
                <h4>Name: {user?.displayName}</h4>
                <h4>Email: {user?.email}</h4>
            </div>
            <div className="overflow-x-auto w-full px-20">
                <table className="table w-full mt-10">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* toyName,pictureUrl,subCategory,rating,price,quantity,description                          */}

                            <th>Toy Picture</th>
                            <th>Description</th>
                            <th>Toy Name</th>
                            <th>SubCategory</th>
                            <th>rating</th>
                            <th>Price</th>
                            <th>Available Quantity</th>


                            <th>Update button</th>
                            <th>Delete button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                // toys={toys}
                                // setToys={setToys}
                                // setMyToys={setMyToys}

                            ></MyToysRow>)
                        }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;