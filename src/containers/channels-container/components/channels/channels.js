import React from 'react';
import ChannelList from '../channel-list';
import SectionHeader from '../section-header';
import styles from './channels.css';

export default ( {...props} ) =>
    <div className={styles.default}>
        <SectionHeader title='Channels' count='17' />
        <ChannelList {...props}/>
    </div>;
