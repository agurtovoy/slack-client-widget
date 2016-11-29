import React from 'react';
import cn from 'classnames';
import styles from './team-icon.css';

export default function TeamIcon( props ) {
    const { icon, selected } = props;
    return (
        <div className={ cn( styles.default, { [styles.selected]: selected }, 'image-team-icon', icon ) }>
        </div>
    );
}
