import React from 'react';
import PresenceIcon from '../../../../components/presence-icon';
import styles from './user-presence.css';

export default ( { user } ) => (
        <div className={styles.default}>
            <PresenceIcon status='active' />
            <span className={styles.username}>{user.id}</span>
        </div>
    );
