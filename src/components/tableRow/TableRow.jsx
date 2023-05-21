import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'


const TableRow = ({ carData }) => {
    const { toyName, price, sellerName, subCategory, availableQuantity , _id } = carData || {};
    const {user} = useContext(AuthContext)

    const handelAlert = () => {
        if (!user) {
            Swal.fire({
                icon: 'warning',
                title: 'You have to log in first to view details',
                showConfirmButton: false,
                timer: 2000
            })
        }

    }
    return (
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link to={`/toy-details/${_id}`}><button onClick={handelAlert} className='btn btn-success btn-outline'>View Details</button></Link>
            </td>
        </tr>
    );
};

export default TableRow;