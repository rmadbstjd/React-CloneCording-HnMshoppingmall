import React from 'react';
import {Card} from 'react-bootstrap';
import styles from './ProductCard.module.css';
import {useNavigate} from 'react-router-dom';
const ProductCard = ({item,setCheck}) => {
    const navigate = useNavigate();
    const goToDetail = () => {
        setCheck(item.id);
        console.log("체크했음");    
        navigate(`/products/${item.id}`);
        
    }
    
    return (
        <div>
            <div className={styles.card} onClick={goToDetail}>
                <img width={200}src={item.img}></img>
                <div>{item.title}</div>
                <div>{item.price}</div>
                <div>신상품</div>
            </div>
        </div>
    );
};

export default ProductCard;