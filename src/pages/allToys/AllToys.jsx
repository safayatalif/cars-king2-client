import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from '../../components/tableRow/TableRow';
import { Helmet } from 'react-helmet-async';


const AllToys = () => {
    const toyCarsData = useLoaderData();
    const [carsData, setCarsData] = useState(toyCarsData);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        fetch(`https://cars-king-server.vercel.app/getToysByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setCarsData(data);
            });
    };
    return (
        <div className='bg-hero to-slate-200 rounded-lg'>
            <Helmet>
                <title>All Toys -Cars King</title>
            </Helmet>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4' data-aos="fade-left"
                    data-aos-duration="3000">
                <h1 className='text-3xl font-bold'>All Toys</h1>
                <p>Welcome to our Cars Toy Collection! Explore a
                    diverse range of meticulously crafted toy cars,
                    from classic sports cars to rugged off-road monsters.
                    Each car showcases incredible attention to detail, with
                    functional parts and vibrant colors.
                </p>
            </div>

            <div className='text-center'>
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search Toy" className="input input-bordered input-success w-full max-w-xs text-black" />
                <button className='btn btn-success  ml-4' onClick={handleSearch}>Search</button>
            </div>

            <div className="overflow-x-auto my-8" data-aos="zoom-in" data-aos-duration="3000">
                <table className="table-normal text-center w-full">
                    <thead className='bg-green-400 text-black'>
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