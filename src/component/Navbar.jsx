import React from 'react';
import Button from 'react-bootstrap/Button';
import {FaUserAlt}from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi';
import styles from './Navbar.module.css';
const Navbar = () => {
    
    return (
        <div>
            <div className={styles.navbarContainer}>
                <div className={styles.loginContainer}>
                    <div> <FaUserAlt></FaUserAlt>로그인</div>
                </div>
                    
                <div className={styles.imageContainer}>
                    <img width={100}src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg"/>
                </div>
                <div className={styles.menuContainer}>
                <div>여성 Divided 남성 신생아/유아 아동 H&MHOME Sale 지속가능성</div>
                </div>
                <div className={styles.searchContainer}>
                <div><FiSearch/><input type="text" placeholder="제품이름"></input></div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Navbar;