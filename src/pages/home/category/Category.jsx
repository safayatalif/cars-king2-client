import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../../../components/categoryCard/CategoryCard';
import carKing from "../../../assets/image/carKing.png"
import car1 from "../../../assets/image/car1.png"
import car2 from "../../../assets/image/car2.png"
import car3 from "../../../assets/image/car3.png"
import car4 from "../../../assets/image/car4.png"


const Category = () => {
    const [carToys, setCarToys] = useState([]);
    const [category, setCategory] = useState('regular-cars')



    useEffect(() => {
        fetch(`https://cars-king-server.vercel.app/getToyCarsByCategory/${category}`)
            .then((res) => res.json())
            .then((data) => {
                setCarToys(data);
            });
    }, [category])

    return (
        <div className=' to-slate-200 rounded-lg my-12 p-4'>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4' data-aos="fade-left"
                data-aos-duration="3000">
                <h1 className='text-3xl font-bold'>Toys category</h1>
                <p>Welcome to our Toy Category! Dive into a world of
                    miniature vehicles and endless play possibilities.
                    From sleek sports cars to rugged off-road trucks,
                    our collection offers a wide range of cars that
                    will ignite imagination and fuel exciting adventures.
                    Find your perfect car and let the fun begin!</p>
            </div>
            <Tabs>
                <TabList data-aos="fade-left"
                    data-aos-duration="3000">
                    <Tab onClick={() => setCategory('regular-cars')}>
                        <img className='w-24' src={carKing} alt="" />
                        <p className='font-bold mt-4 text-center' >Regular Cars</p>
                    </Tab>
                    <Tab onClick={() => setCategory('Sports-cars')}>
                        <img className='w-24' src={car1} alt="" />
                        <p className='font-bold mt-4 text-center' >Sports Cars</p>
                    </Tab>
                    <Tab onClick={() => setCategory('truck-cars')}>
                        <img className='w-24' src={car3} alt="" />
                        <p className='font-bold mt-4 text-center' >Truck Cars</p>
                    </Tab>
                    <Tab onClick={() => setCategory('Remote-controlled-cars')}>
                        <img className='w-24' src={car4} alt="" />
                        <p className='font-bold mt-4 text-center' >RC Cars</p>
                    </Tab>
                    <Tab onClick={() => setCategory('Police-cars')}>
                        <img className='w-24' src={car2} alt="" />
                        <p className='font-bold mt-4 text-center' >Police Cars</p>
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4' data-aos="fade-up"
                        data-aos-duration="3000">
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4' data-aos="fade-up"
                        data-aos-duration="3000">
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4' data-aos="fade-up"
                        data-aos-duration="3000">
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4' data-aos="fade-up"
                        data-aos-duration="3000">
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4' data-aos="fade-up"
                        data-aos-duration="3000">
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;