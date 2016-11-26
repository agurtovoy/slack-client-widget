import React from 'react';
import styles from './macos-window-button.css';
import cn from 'classnames';

export default function MacOSWindowButton( props ) {
    return <div className={cn( styles.default, styles[props.kind] )} />;
}
