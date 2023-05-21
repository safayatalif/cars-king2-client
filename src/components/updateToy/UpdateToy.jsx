import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateToy = () => {
    const toyData = useLoaderData();
    const { price, availableQuantity, detailDescription, _id } = toyData;

    const handleJobUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const detailDescription = form.details.value;
        const data = {
            price,
            availableQuantity,
            detailDescription
        }

        console.log(data);
        fetch(`https://cars-king-server.vercel.app/updateToyCarsById/${_id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Toy Update',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            });

    }
    return (
        <div className='bg-hero to-slate-200'>
            <Helmet>
                <title>Update Toy -Cars King</title>
            </Helmet>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>Update Toy</h1>
            </div>

            <form onSubmit={handleJobUpdate} className="card-body rounded-lg m-8 w-full md:w-3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="Price" defaultValue={price} name='price' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="text" placeholder="Available Quantity" defaultValue={availableQuantity} name='quantity' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details Description</span>
                    </label>
                    <textarea className="textarea textarea-success" name='details' defaultValue={detailDescription} placeholder="Details Description"></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;