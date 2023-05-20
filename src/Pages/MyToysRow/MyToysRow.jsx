import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const MyToysRow = ({ myToy,setMyToys,myToys}) => {
    // const [toys, setToys] = useState([])

    const { _id, toyName, photo, subCategory, rating, price, quantity, description } = myToy

  

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure delete Toy?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addToys/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "Your Toy has been deleted.",
                                "success"
                            )

                            const remaining = myToys.filter((toy) => toy._id !== id);
                            // setToys(remaining);
                            setMyToys(remaining);

                        }

                    });

            }
        });

    }

    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={photo} alt="" />
                        </div>
                    </div>

                </div>
            </td>
            <td>{description}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{rating}</td>
            <td>{price}</td>
            <td>{quantity}</td>


            <td>
               <Link to={`/updatetoy/${_id}`}>
               <button className="px-2 rounded-lg py-2 text-sm font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] w-full">Update</button>
               </Link>
            </td>
            <td>
               
                
                <button onClick={() => handleDelete(_id)} className="px-2 rounded-lg py-2 text-sm font-semibold text-white bg-red-600 w-full">Delete</button>
            
            </td>
        </tr>
    );
};

export default MyToysRow;