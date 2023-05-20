import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from './../../contexts/AuthProvider';
import Swal from 'sweetalert2'


const AddToys = () => {
    const { user } = useContext(AuthContext);


    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addToyCars', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if(response?.insertedId){
                    Swal.fire({
                        icon: 'success',
                        title: 'Your Toy has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      reset()

                }
            })
            .catch(err => console.error(err));
        console.log(data)
    };

    return (
        <div>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>Add A Toys</h1>
                <p>Discover your dream toy car with our convenient
                    Toy Car Form! Simply fill
                    out the form with your preferences .
                </p>
            </div>
            <form className="card-body bg-green-100 rounded-lg m-8 w-full md:w-3/4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Toy Name</span>
                    </label>
                    <input className="input input-bordered" type='text' {...register("toyName", { required: true })} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input className="input input-bordered" type='url' {...register("pictureURL", { required: true })} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input className="input input-bordered" type='email' readOnly defaultValue={user?.email} {...register("sellerEmail")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input className="input input-bordered" type='name' readOnly defaultValue={user?.displayName} {...register("sellerName")} />
                </div>
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input className="input input-bordered" type='text' defaultValue="$" {...register("price", { required: true })} />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input className="input input-bordered" type='number' min="0" max="5" step="0.1" {...register("rating", { required: true })} />
                    </div>
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input className="input input-bordered" type='number' {...register("availableQuantity", { required: true })} />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail Description</span>
                    </label>
                    <textarea className="textarea textarea-success" type='text' placeholder="Detail Description" {...register("detailDescription", { required: true })}></textarea>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Sub Category</span>
                    </label>
                    <select className='input input-bordered' {...register("subCategory", { required: true })}>
                        <option value="regular-cars">Regular Cars</option>
                        <option value="Sports-cars">Sports Cars</option>
                        <option value="truck-cars">Truck Cars</option>
                        <option value="Police-cars">Police Cars</option>
                        <option value="Remote-controlled-cars">Remote Controlled Cars</option>
                    </select>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit"/>
                </div>
            </form>
        </div>

    );
};

export default AddToys;