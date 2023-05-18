import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from '../../components/tableRow/TableRow';

const AllToys = () => {
    const carsData = useLoaderData();

    return (
        <div>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>All Toys</h1>
                <p>Welcome to our Cars Toy Collection! Explore a
                    diverse range of meticulously crafted toy cars,
                    from classic sports cars to rugged off-road monsters.
                    Each car showcases incredible attention to detail, with
                    functional parts and vibrant colors.
                </p>
            </div>
            <div className="overflow-x-auto m-4">
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
                            carsData.map(carData => <TableRow key={carData._id} carData={carData}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;