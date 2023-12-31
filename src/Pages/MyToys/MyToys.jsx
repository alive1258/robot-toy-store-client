import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
// import MyToyRow from './MyToyRow';
import { useLoaderData } from 'react-router-dom';
import MyToysRow from '../MyToysRow/MyToysRow';
import UseTitle from '../../Hooks/UseTitle';

const MyToys = () => {
    UseTitle("My Toy")
    // const allToy = useLoaderData()
    // console.log('alltoy',allToy)
    // const [toys, setToys] = useState([])
    // console.log("toys",toys)

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
   

    const url = `https://robot-toy-store-server.vercel.app/toys?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    return (
        <div className='mt-20 mb-10'>
            <h1 className='mt-10 mb-6 text-4xl text-center'>My Toys:{myToys.length}</h1>

           
            <div className="overflow-x-auto w-full md:px-20">
                <table className="table w-full mt-10">
                    {/* head */}
                    <thead>
                        <tr>
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
                                myToys={myToys}
                                // setToys={setToys}
                                
                                setMyToys={setMyToys}

                            ></MyToysRow>)
                        }



                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;