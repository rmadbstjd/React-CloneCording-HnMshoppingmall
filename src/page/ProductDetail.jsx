import React,{useEffect, useState} from 'react';
import styles from './ProductDetail.module.css';
const ProductDetail = ({check}) => {
    console.log("체크",check);
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
        let url=`http://localhost:5000/products/${check}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
       
    };
    useEffect(() => {
        getProductDetail();
    },[])

    return (
        <div className={styles.container}>
                <img width={300}src={product && product.img}></img>
                <div className={styles.infoContainer}>
                    <div className={styles.card}></div>
                     <div className={styles.title}>{product && product.title}</div>
                    <div className={styles.price}>${product && product.price}</div>
                    <div>
                    <select className={styles.select}>
                        {product && product.size.map((item) =><option>{item}</option>)}
                    </select>
                    </div>
                    <button className={styles.button}>구매하기</button>
                </div>
                
        </div>
    );
};

export default ProductDetail;