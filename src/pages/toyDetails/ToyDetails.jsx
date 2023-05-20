import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toysData = useLoaderData();
    const { pictureURL, toyName, price, rating, _id, sellerName, sellerEmail, detailDescription, subCategory, availableQuantity } = toysData || {};
    return (
        <div className="hero bg-gradient-to-r from-green-100 to-green-50 rounded-lg my-12 p-4">
            <Helmet>
                <title>Toy Details -Cars King</title>
            </Helmet>
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={pictureURL} className="w-full md:w-1/2 h-80 rounded-lg" />
                <div className='space-y-4'>
                    <h1 className="text-5xl font-bold">{toyName}</h1>
                    <p className="py-6">{detailDescription}</p>
                    <p><span className='font-bold'>Seller Name : </span>{sellerName}</p>
                    <p><span className='font-bold'>Seller Email : </span>{sellerEmail}</p>
                    <p><span className='font-bold'>Sub Category : </span>{subCategory}</p>
                    <p><span className='font-bold'>Available Quantity : </span>{availableQuantity}</p>
                    <p><span className='font-bold'>Rating : </span>{rating}</p>
                    <div className="rating">
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    </div>
                    <p className='text-yellow-600'><span className='font-bold text-orange-500'>Price : </span> ${price}</p>
                    <button className="btn btn-outline btn-success"> Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;