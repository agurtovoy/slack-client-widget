import React from 'react';
import styles from './macos-window-button.css';
import cn from 'classnames';

export default function MacOSWindowButton( { kind } ) {
    return <div className={cn( styles.default, styles[kind] )} />;
}
