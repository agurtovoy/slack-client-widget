import React from 'react';
import Channels from './components/channels';
import DirectMessages from './components/direct-messages';
import styles from './channels-container.css';

export default ( { team, user, channels, ims } ) =>
    <div className={styles.default}>
        <Channels channels={channels} user={user} />
        <DirectMessages ims={ims} />
    </div>;
