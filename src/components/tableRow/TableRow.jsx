import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ carData }) => {
    const { toyName, price, sellerName, subCategory, availableQuantity , _id } = carData || {};
    return (
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link to={`/toy-details/${_id}`}><button className='btn btn-success btn-outline'>View Details</button></Link>
            </td>
        </tr>
    );
};

export default TableRow;