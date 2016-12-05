import React from 'react';
import { ChannelHashIcon, ChannelLockIcon } from '../../../../components/svg-icons';
import styles from './channel-entry.css';

export default ( { channel } ) =>
    <li className={styles.default}>
        <a className={ styles[channel.active ? 'active' : 'name'] }>
            { channel.private ? <ChannelLockIcon className={styles.icon} /> : <ChannelHashIcon className={styles.icon} /> }
            <span className={styles.text}>{channel.name}</span>
        </a>
    </li>;
