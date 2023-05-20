import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'


const CategoryCard = ({ carToy }) => {
    const { pictureURL, toyName, price, rating, _id } = carToy || {};
    const { user } = useContext(AuthContext);

    const handelAlert = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                title: 'You have to log in first to view details',
                showConfirmButton: false,
                timer: 1500
            })
        }

    }

    return (
        <div className="card w-full bg-gradient-to-r from-green-100 to-green-50 shadow-md">
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
                <p><span className='font-bold'>Price:</span> $ {price}</p>

                <div className="card-actions">
                    <Link to={`/toy-details/${_id}`}><button onClick={handelAlert} className="btn btn-success btn-outline">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;