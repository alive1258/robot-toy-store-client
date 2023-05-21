import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const { user } = useContext(AuthContext)
    const updateToys= useLoaderData()
    const {_id, name, email, photo, toyName, subCategory, price, rating, quantity,description } = updateToys;

    const handleUpdateToy = (event) => {
        event.preventDefault();

        const form = event.target;
        // const name = user?.displayName;
        // const email = user?.email
        // const photo = form.photo.value;
        // const toyName = form.toyName.value;
        // const subCategory = form.subCategory.value;
        const price = form.price.value;
        // const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const UpdateToyData = {
            // name, email, photo, toyName, subCategory, rating, 
            price, quantity, description
            
        }
        console.log('addToys:', UpdateToyData)
        // form.reset('')
        fetch(`https://robot-toy-store-server.vercel.app/addToys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateToyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount >0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Toy Update successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })




    }


    return (
        <div>
            <div className='mt-20 px-20'>
            <h1 className='mb-4 text-4xl text-center'>Update Toy</h1>

            <form onSubmit={handleUpdateToy}>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='name' readOnly defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='email' readOnly defaultValue={user?.email} className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <input type="text" name='photo' readOnly defaultValue={photo} placeholder="URL of the Toy" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='toyName' readOnly defaultValue={toyName} placeholder="Toy Name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <input type="text" name='subCategory' readOnly defaultValue={subCategory} placeholder="Sub-category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' readOnly defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Quantity" className="input input-bordered" />

                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>

                    <textarea type="text" name='description' defaultValue={description} placeholder="Description" className="textarea input input-bordered" />

                </div>

                <div className="form-control mt-6">
                    {/* <button className="btn btn-primary">Login</button> */}
                    <input type="submit" value="Update Toy Information" className="px-4 rounded-lg py-2 text-lg font-semibold text-white bg-[#ff8c00] hover:bg-[#e78f24] " />
                </div>
            </form>

        </div>
        </div>
    );
};

export default UpdateToy;