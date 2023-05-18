import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ carData }) => {
    const { toyName, price, sellerName, subCategory, availableQuantity } = carData;
    return (
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link><button className='btn btn-success'>View Details</button></Link>
            </td>
        </tr>
    );
};

export default TableRow;