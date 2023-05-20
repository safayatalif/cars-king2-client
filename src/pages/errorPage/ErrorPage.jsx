import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorPage from "../../assets/image/errorPage.jpg"
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    const { error, status } = useRouteError()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
            <Helmet>
                <title>Error -Cars King</title>
            </Helmet>
            <img src={errorPage} alt="404 Not Found" className="w-10/12 h-96 mb-8" />
            <h2 className='mb-8 font-extrabold text-3xl text-yellow-500'>
                <span className='sr-only'>Error</span>
                {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                {error?.message}
            </p>
            <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;