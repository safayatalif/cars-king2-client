import React from 'react';
import PhotoAlbum from "react-photo-album";

const Gallery = () => {

    const photos = [
        {
            src: "https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais",
            width: 300,
            height: 200,
            srcSet: [
                { src: "https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 300, height: 200 },
                { src: "https://img.freepik.com/free-vector/sticker-design-with-side-view-police-car-isolated_1308-76459.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 200, height: 150 }
            ]
        },
        {
            src: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph",
            width: 300,
            height: 200,
            srcSet: [
                { src: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph", width: 300, height: 200 },
                { src: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph", width: 200, height: 150 }
            ]
        },
        {
            src: "https://img.freepik.com/premium-vector/cartoon-funny-blue-truck-character_29190-6777.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais",
            width: 300,
            height: 200,
            srcSet: [
                { src: "https://img.freepik.com/premium-vector/cartoon-funny-blue-truck-character_29190-6777.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 300, height: 200 },
                { src: "https://img.freepik.com/premium-vector/cartoon-funny-blue-truck-character_29190-6777.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 200, height: 150 }
            ]
        },
        {
            src: "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph",
            width: 300,
            height: 200,
            srcSet: [
                { src: "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph", width: 300, height: 200 },
                { src: "https://img.freepik.com/free-vector/red-sedan-car-isolated-white-vector_53876-64366.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=sph", width: 200, height: 150 }
            ]
        },
        {
            src: "https://img.freepik.com/premium-vector/children-toy-truck-cute-cartoon-illustration_204216-67.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais",
            width: 300,
            height: 200,
            srcSet: [
                { src: "https://img.freepik.com/premium-vector/children-toy-truck-cute-cartoon-illustration_204216-67.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 300, height: 200 },
                { src: "https://img.freepik.com/premium-vector/children-toy-truck-cute-cartoon-illustration_204216-67.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 200, height: 150 }
            ]
        },
        {
            src: "https://img.freepik.com/free-psd/3d-rendering-firefighter-icon_23-2149859768.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais",
            width: 300,
            height: 200,
            srcSet: [
                { src: "https://img.freepik.com/free-psd/3d-rendering-firefighter-icon_23-2149859768.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 300, height: 200 },
                { src: "https://img.freepik.com/free-psd/3d-rendering-firefighter-icon_23-2149859768.jpg?size=626&ext=jpg&ga=GA1.2.1613183627.1673832056&semt=ais", width: 200, height: 150 }
            ]
        }
    ];

    return (
        <div className='bg-base-200 rounded-lg my-12 p-4'>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4'>
                <h1 className='text-3xl font-bold'>Photo Gallery</h1>
                <p>Welcome to the Cars Toy Photo Gallery! In this collection, you will find a stunning array of toy cars that are sure to delight car enthusiasts of all ages. </p>
            </div>
            <PhotoAlbum layout="rows"  photos={photos} />
        </div>
    );
};

export default Gallery;