import React from 'react';
import cn from 'classnames';
import TeamMentionsBadge from '../team-mentions-badge';
import styles from './team-icon.css';

export default function TeamIcon( props ) {
    const { icon, selected, mentions } = props;
    return (
        <div className={styles.default}>
            <div className={ cn( styles.image, 'image-team-icon', icon, { [styles.selected]: selected } ) } />
            { mentions && <TeamMentionsBadge mentions={mentions} /> }
        </div>
    );
}
