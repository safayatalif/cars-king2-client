import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyTableRow from '../../components/myTableRow/MyTableRow';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setToys] = useState([]);
    const [sorting, setSorting] = useState(-1)

    useEffect(() => {
        fetch(`https://cars-king-server.vercel.app/getToyCarsByEmail/${user?.email}?sort=${sorting}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, sorting])

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
                fetch(`https://cars-king-server.vercel.app/deleteToyCarsById/${_id}`, {
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
        <div className='mb-8 bg-gradient-to-r from-green-100 to-green-50'>
            <Helmet>
                <title>My Toys -Cars King</title>
            </Helmet>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>My Toys</h1>
                <p>
                    Introducing my impressive car toy collection!
                </p>
                <div className="btn-group">
                    <button className="btn btn-active" onClick={() => setSorting(1)}>Ascending</button>
                    <button className="btn" onClick={() => setSorting(-1)}>Descending</button>
                </div>
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