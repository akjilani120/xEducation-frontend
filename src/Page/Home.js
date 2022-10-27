import React from 'react';
import Login from './Component/Login';
import OrComponent from './Component/OrComponent';
import SignPage from './Component/SignPage';
import "./Home.css"
const Home = () => {
    return (
        <div className="home-main">
           <div className='home-body'>
            <SignPage/>
            <OrComponent/>
            <Login/>
            <div>
                <p className='text-center fw-bold mt-4'>Already have an account? <span className='text-info'>Sign In</span></p>
            </div>
           </div>
        </div>
    );
};

export default Home;