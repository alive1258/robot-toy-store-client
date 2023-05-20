import React from 'react';

const MyToyRow = ({myToys}) => {
    const {toyName,photo,subCategory,rating,price,quantity,description}=myToys
    console.log(description)
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
                          
                
                <th>
                    <button className="btn btn-ghost btn-xs">Update</button>
                </th>
                <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
       
    );
};

export default MyToyRow;