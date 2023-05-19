import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegEdit ,FaTrashAlt } from "react-icons/fa";



const MyTableRow = ({myToy}) => {
    const { toyName, price, sellerName, subCategory, availableQuantity , _id } = myToy || {};

    return (
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link to={`/update-toy/${_id}`}><button className='btn btn-success btn-outline'> <FaRegEdit></FaRegEdit></button></Link>
                <Link to={`/toy-details/${_id}`}><button className='btn btn-success btn-outline'><FaTrashAlt></FaTrashAlt></button></Link>
            </td>
        </tr>
    );
};

export default MyTableRow;