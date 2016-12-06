import React from 'react';
import ChannelHeader from '../channel-header';
import SidebarHeader from '../sidebar-header';
import styles from './messages-header.css';

export default ( { ...props } ) =>
    <div className={styles.default}>
        <ChannelHeader { ...props } />
        <SidebarHeader { ...props } />
    </div>;
