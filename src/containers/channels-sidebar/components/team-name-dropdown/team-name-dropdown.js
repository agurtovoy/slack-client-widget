import React from 'react';
import { ArrowDownIcon } from '../../../../components/svg-icons';
import styles from './team-name-dropdown.css';

export default function TeamNameDropdown( { name } ) {
    return (
        <div className={styles.default}>
            <div className={styles.text}>{name}</div>
            <ArrowDownIcon className={styles.icon} />
        </div>
    );
}
