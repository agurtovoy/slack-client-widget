import React from 'react';
import ChannelMetaInfo from './components/channel-metainfo';
import styles from './message-stream-start.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <div className={styles.padding}></div>
        <ChannelMetaInfo channel={channel} />
    </div>;
