import React from 'react';
import { SidebarIcon, GearIcon, PhoneIcon } from '../../../../../../components/svg-icons';
import styles from './channel-actions.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <a className={styles.phone} href="#"><PhoneIcon /></a>
        <a className={styles.gear} href="#"><GearIcon /></a>
        <a className={styles.sidebar} href="#"><SidebarIcon /></a>
        <div className={styles.divider} />
    </div>;
