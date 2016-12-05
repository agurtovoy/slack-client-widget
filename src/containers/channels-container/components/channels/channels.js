import React from 'react';
import ChannelList from '../channel-list';
import SectionHeader from '../section-header';
import styles from './channels.css';

export default ( { channels, user } ) =>
    <div className={styles.default}>
        <SectionHeader title='Channels' count={channels.length} />
        <ChannelList channels={channels} />
    </div>;
