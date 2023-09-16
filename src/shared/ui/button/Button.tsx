import React from 'react';
import styles from './button.module.css'
const Button = () => {
    return (
        <div>
            <button className={styles.app}>
                подобрать психолога
            </button>
        </div>
    );
};

export default Button;