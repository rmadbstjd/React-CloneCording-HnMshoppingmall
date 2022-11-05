import React from 'react';
import ProductDetail from '../page/ProductDetail';
import {Navigate} from 'react-router-dom';
//return auth ===true?<ProductDetail/>:<Navigate to="/login"/>;
const PrivateRoute = ({check, auth}) => {
    
        if(auth === true) {
            return <ProductDetail check={check}/>
        }
        else {
        return <Navigate to="/login"></Navigate>
        }
    
};

export default PrivateRoute;