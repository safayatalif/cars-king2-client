import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from '../../components/tableRow/TableRow';

const AllToys = () => {
    const carsData = useLoaderData();
    console.log(carsData)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table-normal text-center w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy</th>
                            <th>Seller</th>
                            <th>Sub Category</th>
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