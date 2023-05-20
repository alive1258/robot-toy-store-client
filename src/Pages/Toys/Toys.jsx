import React from 'react';
import { Link } from 'react-router-dom';

const Toys = ({ allToy }) => {
    const { _id, toyName, subCategory, price, quantity } = allToy
    return (

        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        {/* <img src={photo} alt="" /> */}
                    </div>
                    <div>
                        <div className="font-semibold">{toyName}</div>

                    </div>
                </div>
            </td>
            <td>

                {subCategory}
            </td>
            <td>${price}</td>
            <th>
                <div className="btn btn-ghost btn-xs">{quantity}</div>
            </th>
            <th>
                <Link to={`/toy/${_id}`}>
                    <button className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] ml-2 md:block hidden">View Details</button>
                </Link>
            </th>
           
        </tr>

    );
};

export default Toys;