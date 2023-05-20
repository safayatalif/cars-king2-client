import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyTableRow from '../../components/myTableRow/MyTableRow';
import Swal from 'sweetalert2'


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getToyCarsByEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    const handleDelete = _id => {
        // console.log('delete', _id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your toy has been deleted.',
                    'success'
                )
                fetch(`http://localhost:5000/deleteToyCarsById/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(myToy => myToy._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className='mb-8'>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>My Toys</h1>
                <p>
                    Introducing my impressive car toy collection!
                </p>
            </div>
            <div className="overflow-x-auto my-8">
                <table className="table-normal text-center w-full">
                    <thead className='bg-green-200'>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyTableRow key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MyTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;