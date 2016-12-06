import React from 'react';
// import { EditIcon, PlusIcon, UserIcon } from '../../../../../../components/svg-icons';
import styles from './channel-title-info.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <h2 className={styles.title}>#{channel.name}</h2>
        <div className={styles.info}>
            19 memebers
            <span className={styles.divider}>|</span>
            <span className={styles.topic}>Add a topic</span>
        </div>
    </div>;
