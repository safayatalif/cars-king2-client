import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../../../components/categoryCard/CategoryCard';


const Category = () => {
    const [carToys, setCarToys] = useState([]);
    const [category, setCategory] = useState('regular-cars')



    useEffect(() => {
        fetch(`http://localhost:5000/getToyCarsByCategory/${category}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCarToys(data);
            });
    }, [category])

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab ><button onClick={() => setCategory('regular-cars')}>Regular Cars</button></Tab>
                    <Tab ><button onClick={() => setCategory('Sports-cars')}>Sports Cars</button></Tab>
                    <Tab ><button onClick={() => setCategory('truck-cars')}>Truck Cars</button></Tab>
                    <Tab ><button onClick={() => setCategory('Remote-controlled-cars')}>Remote Controlled Cars</button></Tab>
                    <Tab ><button onClick={() => setCategory('Police-cars')}>Police Cars</button></Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                        {
                            carToys.map(carToy => <CategoryCard key={carToy._id} carToy={carToy} ></CategoryCard>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
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