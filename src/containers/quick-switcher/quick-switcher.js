import React from 'react';
import { QuickSwitcherIcon } from '../../components/svg-icons';
import styles from './quick-switcher.css';

export default ( { team, user } ) =>
    <div className={styles.default}>
        <QuickSwitcherIcon className={styles.icon} />
        <span className={styles.label}>Quick Switcher</span>
        <span className={styles.shortcut}>⌘K</span>
    </div>;
