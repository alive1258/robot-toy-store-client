import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='mt-20 text-center text-3xl'>Blogs</h1>
            <div>
              <div>
              <h2>What is an access token and refresh token ?</h2>
                <p>Refresh Token:- A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login</p>
                <p>Access tokens:- Access tokens help users get the resources they need to complete their tasks, but such tokens can also expose your organization to data compromise or other malicious actions if a hacker is able to steal them</p>
              </div>
              <div>
                <h2>How do they work and where should we store them on the client-side ?</h2>
                <p>When a user successfully authenticates with a server, the server generates an access token and returns it to the client.</p>
                <p>Along with the access token, the server may also issue a refresh token during the authentication process.</p>
                <p>Access tokens should be stored on the client-side, typically in memory or a short-term storage mechanism such as a client-side session.</p>
              </div>
              <div>
                <h2>Compare SQL and NoSQL databases ?</h2>
                <p>
                SQL: SQL databases follow a structured and predefined schema. They use tables with fixed columns and rows to organize and store data in a tabular format. The schema defines the structure, relationships, and constraints of the data.
NoSQL: NoSQL databases have a flexible and dynamic schema. They use various data models like key-value pairs, documents, graphs, or columnar formats to store data. The schema can be modified on-the-fly, allowing for more flexible and agile 
SQL: SQL databases use the SQL language for defining, manipulating, and retrieving data. SQL provides a standardized syntax and powerful querying capabilities, including joins, aggregations, and complex operations.
NoSQL: NoSQL databases have their query languages specific to their data models. Each NoSQL database may have a different query language tailored to its data model, such as MongoDB's query language for document databases or Cypher for graph databases.
                </p>
              </div>
              <div>
                <h2>What is express js?</h2>
                <p></p>
              </div>
              <div>
                <h2> What is Nest JS ?</h2>
                <p></p>
              </div>
              <div>
                <h2>What is MongoDB aggregate and how does it work ?</h2>
              </div>

            </div>
            
        </div>
    );
};

export default Blogs;