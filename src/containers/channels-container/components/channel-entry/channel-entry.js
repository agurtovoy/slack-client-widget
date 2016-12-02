import React from 'react';
import styles from './channel-entry.css';

export default ( { channel } ) =>
    <li className={styles.default}>
        <a className={styles.name}>{channel.name}</a>
    </li>;
