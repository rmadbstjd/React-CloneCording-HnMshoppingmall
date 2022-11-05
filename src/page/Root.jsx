import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Root = ({auth,setAuth}) => {
    return (
        <div>
           <Navbar auth ={auth} setAuth ={setAuth}/>
           <Outlet/>
        </div>
    );
};

export default Root;