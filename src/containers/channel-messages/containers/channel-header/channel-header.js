import React from 'react';
import ChannelTitleInfo from './components/channel-title-info';
import ChannelActions from './components/channel-actions';
import styles from './channel-header.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <ChannelTitleInfo channel={channel} />
        <ChannelActions channel={channel} />
    </div>;
