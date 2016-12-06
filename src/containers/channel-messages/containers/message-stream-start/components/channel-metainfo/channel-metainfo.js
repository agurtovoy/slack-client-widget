import React from 'react';
import { EditIcon, PlusIcon, UserIcon } from '../../../../../../components/svg-icons';
import styles from './channel-metainfo.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <h1 className={styles.header}>
            <a href="#"><span className={styles.hash}>#</span>{channel.name}</a>
        </h1>
        <p className={styles.description}>
            You created this channel on October 31st. This is the very beginning
            of the <a href="#">#{channel.name}</a> channel.
        </p>
        <ul className={styles.actions}>
            <li className={styles.action}><a href="#"><EditIcon /> Set a purpose</a></li>
            <li className={styles.action}><a href="#"><PlusIcon /> Add an app or custom integration</a></li>
            <li className={styles.action}><a href="#"><UserIcon /> Invite others to this channel</a></li>
        </ul>
    </div>;
