import React from 'react';
import styles from './team-name-dropdown.css';

export default function TeamNameDropdown( props ) {
    return (
        <div className={styles.default}>
            <div className={styles.text}>{props.name}</div>
        </div>
    );
}
