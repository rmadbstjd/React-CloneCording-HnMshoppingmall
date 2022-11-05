import React from 'react';
import { useEffect,useState } from 'react';
import ProductCard from '../component/ProductCard';
import styles from './Product.module.css';
import {useSearchParams} from 'react-router-dom';
const Product = ({setCheck}) => {
    const [query, setQuery] = useSearchParams();
    const [productList, setProductList] = useState(null);
    const getProducts = async () => {
        let searchQuery= query.get('q')|| "";
        let url=`http://localhost:5000/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    },[query])
    return (
        <div className={styles.container}>
            <div className={styles.productContainer}>
                {productList && productList.map((item)=><ProductCard setCheck={setCheck}item={item}></ProductCard>)}
            </div>      
        </div>
    );
};

export default Product;