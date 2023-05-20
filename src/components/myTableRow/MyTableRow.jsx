import React from 'react';
import { Link } from 'react-router-dom';

import { FaRegEdit, FaTrashAlt } from "react-icons/fa";



const MyTableRow = ({ myToy , handleDelete }) => {
    const { toyName, price, sellerName, subCategory, availableQuantity, _id } = myToy || {};

    return (
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td className='flex'>
                <Link to={`/update-toy/${_id}`}><button className='btn btn-success btn-outline mr-4'> <FaRegEdit></FaRegEdit></button></Link>
                <button onClick={()=>handleDelete(_id)} className='btn btn-success btn-outline'><FaTrashAlt></FaTrashAlt></button>
            </td>
        </tr>
    );
};

export default MyTableRow;