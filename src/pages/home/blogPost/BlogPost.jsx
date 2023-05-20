import React from 'react';

const BlogPost = () => {
    return (
        <div className='bg-gradient-to-r from-green-50 to-green-100 rounded-lg my-12 p-4'>
            <h1 className='text-4xl font-bold my-6 text-center'>BLOG POSTS</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className="card w-full">
                    <figure className='p-4'><img className='rounded-xl' src="https://img.freepik.com/free-photo/kid-playing-home_23-2148131061.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">DIY Toy Car Projects: Building Your Own Playtime Fun</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, the readable content of a page when looking at its layout....</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-success">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full">
                    <div className="card-body text-center">
                        <h2 className="card-title">Race to the Finish Line: Toy Car Games</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, the readable content of a page when looking at its layout....</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-warning">Read More</button>
                        </div>
                    </div>
                    <figure className='p-4'><img className='rounded-xl' src="https://img.freepik.com/free-photo/child-having-fun-during-playtime_23-2149382725.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" alt="Shoes" /></figure>
                </div>
                <div className="card w-full">
                    <figure className='p-4'><img className='rounded-xl' src="https://img.freepik.com/free-photo/child-with-red-car_1149-686.jpg?size=626&ext=jpg&ga=GA1.1.1613183627.1673832056&semt=ais" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title">Toy Cars for All Ages: From Classic to Modern</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, the readable content of a page when looking at its layout...</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-success">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;