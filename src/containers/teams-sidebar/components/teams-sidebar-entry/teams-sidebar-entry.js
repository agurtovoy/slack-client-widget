import React from 'react';
import cn from 'classnames';
import TeamIcon from '../team-icon';
import styles from './teams-sidebar-entry.css';
import fontStyle from 'font-family-system-ui';

export default function TeamsSidebarEntry( props ) {
    const { team, shortcut, selected } = props;
    return (
        <div className={ cn( styles.default, { [styles.selected]: selected, [styles.unread]: !selected && team.activity.unread } ) }>
            <TeamIcon url={team.icon}/>
            <div className={ cn( styles.shortcut, fontStyle['u-font-family-system-ui'] ) }>{shortcut}</div>
        </div>
    );
}
