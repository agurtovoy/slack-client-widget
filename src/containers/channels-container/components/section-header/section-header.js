import React from 'react';
import styles from './section-header.css';

export default ( { title, count } ) =>
    <h2 className={styles.default}>
        {title} <span className={styles.count}>({count})</span>
    </h2>;
