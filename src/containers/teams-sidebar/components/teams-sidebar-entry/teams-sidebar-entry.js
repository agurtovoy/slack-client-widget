import React from 'react';
import TeamIcon from '../team-icon';
import styles from './teams-sidebar-entry.css';

export default function TeamsSidebarEntry( props ) {
    return (
        <div className={styles.default}>
            <TeamIcon />
            <div className={styles.shortcut}>{props.shortcut}</div>
        </div>
    );
}
