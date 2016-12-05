import React from 'react';
import ChannelHeader from '../channel-header';
import styles from './messages-header.css';

export default ( { ...props } ) =>
    <div className={styles.default}>
        <ChannelHeader { ...props } />
    </div>;
