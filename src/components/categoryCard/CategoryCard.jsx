import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ carToy }) => {
    const { pictureURL, toyName, price, rating, _id } = carToy || {};

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
                <img src={pictureURL} alt="Shoes" className="rounded-xl h-56 w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toyName}</h2>
                <div className="rating">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
                <p><span className='font-bold'>Rating:</span>{rating}</p>
                <p><span className='font-bold'>Price:</span>{price}</p>

                <div className="card-actions">
                    <Link to={`/toy-details/${_id}`}><button className="btn btn-success btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;