import React from 'react';
import cn from 'classnames';
import styles from './team-mentions-badge.css';
import fontStyle from 'font-family-system-ui';

export default function TeamMentionsBadge( props ) {
    const { mentions } = props;
    return (
        <div className={ cn( styles.default, fontStyle['u-font-family-system-ui'] ) }>{mentions}</div>
    );
}
