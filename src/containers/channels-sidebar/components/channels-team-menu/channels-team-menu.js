import React from 'react';
import TeamNameDropdown from '../team-name-dropdown';
import UserPresence from '../user-presence';
import styles from './channels-team-menu.css';

export default function ChannelsTeamMenu( { team, user } ) {
    return (
        <div className={styles.default}>
            <TeamNameDropdown name={team.name} />
            <UserPresence user={user}/>
        </div>
    );
}
