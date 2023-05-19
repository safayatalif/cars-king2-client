import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyTableRow from '../../components/myTableRow/MyTableRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getToyCarsByEmail/${user?.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])

    return (
        <div>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>My Toys</h1>
                <p>
                    Introducing my impressive car toy collection!
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
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
                            myToys.map(myToy => <MyTableRow key={myToy._id} myToy={myToy}></MyTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;