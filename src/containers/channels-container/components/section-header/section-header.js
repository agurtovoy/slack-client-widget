import React from 'react';
import { NewChannelIcon } from '../../../../components/svg-icons';
import styles from './section-header.css';

export default ( { title, count } ) =>
    <div className={styles.default}>
        <h2 className={styles.header}>
            <a className={styles.title}>{title} <span className={styles.count}>({count})</span></a>
        </h2>
        <a className={styles.new}><NewChannelIcon className={styles['new-icon']} /></a>
    </div>
    ;
