import React from 'react';
import ChannelsContainer from '../channels-container';
import styles from './channels-scroller.css';

export default ( { ...props } ) =>
    <div className={styles.default}>
        <ChannelsContainer { ...props } />
    </div>;
