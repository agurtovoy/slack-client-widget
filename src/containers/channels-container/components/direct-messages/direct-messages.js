import React from 'react';
import ChannelList from '../channel-list';
import SectionHeader from '../section-header';
import styles from './direct-messages.css';

export default ( { ims, user } ) =>
    <div className={styles.default}>
        <SectionHeader title='Direct Messages' count={ims.length} />
        <ChannelList channels={ims} />
    </div>;
