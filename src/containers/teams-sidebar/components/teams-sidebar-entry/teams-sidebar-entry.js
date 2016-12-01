import React from 'react';
import cn from 'classnames';
import TeamIcon from '../team-icon';
import styles from './teams-sidebar-entry.css';
import fontStyle from 'font-family-system-ui';

export default function TeamsSidebarEntry( { team, shortcut, selected } ) {
    const activity = selected ? {} : team.activity;
    return (
        <div className={ cn( styles.default, { [styles.selected]: selected, [styles.unread]: activity.unread } ) }>
            <TeamIcon icon={team.id} selected={selected} mentions={activity.mentions}/>
            <div className={ cn( styles.shortcut, fontStyle['u-font-family-system-ui'] ) }>{shortcut}</div>
        </div>
    );
}
