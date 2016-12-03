import React from 'react';
import { BellIcon } from '../../../../components/svg-icons';
import styles from './notifications-menu.css';

export default ( { user } ) =>
    <a className={styles.default}>
        <BellIcon className={styles.icon} />
    </a>;
