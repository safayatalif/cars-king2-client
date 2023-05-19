import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toysData = useLoaderData();
    const { pictureURL, toyName, price, rating, _id, sellerName, sellerEmail, detailDescription, subCategory, availableQuantity } = toysData || {};
    return (
        <div className="hero min-h-screen bg-base-200 rounded-lg my-12 p-4">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={pictureURL} className="w-full md:w-1/2 rounded-lg shadow-2xl" />
                <div className='space-y-4'>
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <p className="py-6">{detailDescription}</p>
                    <p><span className='font-bold'>Seller Name : </span>{sellerName}</p>
                    <p><span className='font-bold'>Seller Email : </span>{sellerEmail}</p>
                    <p><span className='font-bold'>Sub Category : </span>{subCategory}</p>
                    <p><span className='font-bold'>Available Quantity : </span>{availableQuantity}</p>
                    <p><span className='font-bold'>Rating:</span>{rating}</p>
                    <p><span className='font-bold'>Price:</span>{price}</p>
                    <button className="btn btn-outline btn-success">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;