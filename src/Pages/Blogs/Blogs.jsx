import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const Blogs = () => {
    UseTitle("Blog")
    return (
        <div>
            <h1 className='mt-20 text-center text-3xl'>Blogs</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                <div className='shadow-xl px-6 py-6'>
                    <h2 className='text-lg font-bold'>What is an access token and refresh token ?</h2>
                    <p>Refresh Token:- A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login</p>
                    <p>Access tokens:- Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
                </div>
                <div className='shadow-xl px-6 py-6'>
                    <h2 className='text-lg font-bold'>How do they work and where should we store them on the client-side ?</h2>
                    <p>When a user successfully authenticates with a server, the server generates an access token and returns it to the client.</p>
                    <p>Along with the access token, the server may also issue a refresh token during the authentication process.</p>
                    <p>Access tokens should be stored on the client-side, typically in memory or a short-term storage mechanism such as a client-side session.</p>
                </div>
                <div className='shadow-xl px-6 py-6'>
                    <h2 className='text-lg font-bold'>Compare SQL and NoSQL databases ?</h2>
                    <p>
                        SQL: SQL databases follow a structured and predefined schema. They use tables with fixed columns and rows to organize and store data in a tabular format. The schema defines the structure, relationships, and constraints of the data.
                        NoSQL: NoSQL databases have a flexible and dynamic schema. They use various data models like key-value pairs, documents, graphs, or columnar formats to store data. The schema can be modified on-the-fly, allowing for more flexible and agile
                        SQL: SQL databases use the SQL language for defining, manipulating, and retrieving data. SQL provides a standardized syntax and powerful querying capabilities, including joins, aggregations, and complex operations.
                        NoSQL: NoSQL databases have their query languages specific to their data models. Each NoSQL database may have a different query language tailored to its data model, such as MongoDB's query language for document databases or Cypher for graph databases.
                    </p>
                </div>
                <div className='shadow-xl px-6 py-6'>
                    <h2 className='text-lg font-bold'>What is express js?</h2>
                    <p>Express.js is a popular web application framework for Node.js, a JavaScript runtime environment. It provides a minimalist and flexible approach to building web applications and APIs. Express.js simplifies the process of creating server-side applications by providing a set of robust features and utilities for handling HTTP requests, routing, middleware, and more</p>
               
                    <h2 className='text-lg font-bold'> What is Nest JS ?</h2>
                    <p>
                        NestJS is a progressive and opinionated Node.js framework for building scalable and efficient server-side applications. It leverages modern JavaScript features and design patterns to provide a robust and modular architecture that promotes code reusability and maintainability.</p>
                </div>
                <div className='shadow-xl px-6 py-6'>
                    <h2 className='text-lg font-bold'>What is MongoDB aggregate and how does it work ?</h2>
                    <p>
                        In MongoDB, the aggregate function is used to perform data aggregation operations on a collection. It allows you to process and analyze data by applying multiple stages of transformations to the documents in the collection.

                        The aggregate function takes an array of stages as its parameter, where each stage represents a specific operation or transformation to be applied to the data. These stages are executed sequentially, with the output of one stage serving as the input for the next stage.</p>

                    <p>Data Source: The aggregation pipeline starts with a collection as the data source. This is the collection from which the documents are retrieved for aggregation.

                        Stages: The pipeline consists of one or more stages, each representing an operation to be performed on the data. The stages are executed sequentially, with the output of one stage serving as the input for the next stage.

       </p>

                </div>

            </div>

        </div>
    );
};

export default Blogs;