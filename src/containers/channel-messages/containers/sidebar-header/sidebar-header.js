import React from 'react';
import { VerticalEllipsesIcon, StarIcon, MentionIcon } from '../../../../components/svg-icons';
import styles from './sidebar-header.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <a className={styles.mentions} href="#"><MentionIcon /></a>
        <a className={styles.stars} href="#"><StarIcon /></a>
        <a className={styles.more} href="#"><VerticalEllipsesIcon /></a>
    </div>;
