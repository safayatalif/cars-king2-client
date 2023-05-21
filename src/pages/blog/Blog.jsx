import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className='bg-hero to-slate-200 rounded-lg mb-12'>
            <Helmet>
                <title>Blog -Cars King</title>
            </Helmet>
            <div className='text-center md:w-1/2 mx-auto py-8  space-y-4' data-aos="fade-left"
                data-aos-duration="3000">
                <h1 className='text-3xl font-bold'>Question and Answer Blog</h1>
            </div>
            <div className='space-y-6 pb-8'>
                <div className='card m-4 p-4 border-2' data-aos="zoom-in" data-aos-duration="3000">
                    <h1 className='text-xl font-semibold mb-4'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p>An access token is a credential used by a client to
                        authenticate and gain authorized access to protected resources. It is short-lived,
                        contains identity and authorization information, and is included in API requests.
                        A refresh token is a long-lived credential used to obtain a new access token when
                        the current one expires. It enables clients to refresh their access without re-authenticating.
                        Access tokens are typically stored in memory or browser storage, while refresh tokens should be
                        stored securely, such as in an HTTP-only cookie. Secure storage prevents unauthorized access.
                        Safely managing and storing tokens is crucial for maintaining the security and integrity of
                        client-server authentication processes.
                    </p>
                </div>
                <div className='card m-4 p-4 border-2' data-aos="zoom-in" data-aos-duration="3000">
                    <h1 className='text-xl font-semibold mb-4'>2.Compare SQL and NoSQL databases?</h1>
                    <p>SQL Structured Query Language databases use fixed schemas, predefined relationships,
                        and a standardized query language like SQL. They prioritize data consistency
                        and are suitable for structured data and complex relationships. NoSQL Not Only SQL
                        databases have flexible schemas, scale horizontally, and support various data models.
                        They prioritize scalability and are ideal for unstructured or rapidly changing data.</p>
                </div>
                <div className='card m-4 p-4 border-2' data-aos="zoom-in" data-aos-duration="3000">
                    <h1 className='text-xl font-semibold mb-4'>3.What is express JS ? What is Nest JS ?</h1>
                    <p>Express.js is a lightweight web application framework for Node.js, while NestJS is a
                        TypeScript-based framework built on top of Express.js, providing a structured and
                        scalable architecture for server-side applications. NestJS offers additional
                        features like dependency injection and module-based organization, making it
                        suitable for large-scale projects.</p>
                </div>
                <div className='card m-4 p-4 border-2' data-aos="zoom-in" data-aos-duration="3000">
                    <h1 className='text-xl font-semibold mb-4'>4.What is MongoDB aggregate and how does it work ?</h1>
                    <p>MongoDB&apos;s aggregate framework is a data processing tool that enables advanced analysis
                        and manipulation of data within the database. It works by defining a pipeline of stages,
                        where each stage performs specific operations on the input documents and passes the
                        results to the next stage. Operations like filtering, grouping, sorting, and transformation
                        can be applied to the data, allowing for powerful data analysis and computation directly within MongoDB.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;