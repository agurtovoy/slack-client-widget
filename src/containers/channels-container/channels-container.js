import React from 'react';
import Channels from './components/channels';
import DirectMessages from './components/direct-messages';
import styles from './channels-container.css';

export default ( { team, user } ) =>
    <div className={styles.default}>
        <Channels team={team}/>
        <DirectMessages />
    </div>;
