import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';

const ErrorPage = () => {
    UseTitle("Error")
    const error = useRouteError();
    console.error(error);
    return (
        <div>
            <div id="error-page" className='text-center mt-10'>
           <div className='flex justify-center'>
           <img 
                    src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"
                    alt=""
                />
           </div>
                
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
            <div className="text-center">
              
              
            </div>
            <div className="text-center mt-6">
                <button style={{ background: "greenyellow", border: 'none' }}><Link to='/'>Go Back to Home</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;