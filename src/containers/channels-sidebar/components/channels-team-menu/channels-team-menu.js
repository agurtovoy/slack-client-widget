import React from 'react';
import TeamNameDropdown from '../team-name-dropdown';
import NotificationsMenu from '../notifications-menu';
import UserPresence from '../user-presence';
import styles from './channels-team-menu.css';

export default function ChannelsTeamMenu( { team, user } ) {
    return (
        <div className={styles.default}>
            <TeamNameDropdown name={team.name} />
            <NotificationsMenu user={user} />
            <UserPresence user={user} />
        </div>
    );
}
