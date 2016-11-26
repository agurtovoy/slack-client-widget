import React from 'react';
import MacOSWindowButton from '../macos-window-button';
import styles from './macos-window-buttons.css';

export default function MacOSWindowButtons() {
    return (
        <div className={styles.default}>
            <MacOSWindowButton kind="close" />
            <MacOSWindowButton kind="minimize" />
            <MacOSWindowButton kind="fullscreen" />
        </div>
    );
}
