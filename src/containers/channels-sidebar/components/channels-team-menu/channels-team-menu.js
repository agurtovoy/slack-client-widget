import React from 'react';
import TeamNameDropdown from '../team-name-dropdown';
import styles from './channels-team-menu.css';

export default function ChannelsTeamMenu( { team } ) {
    return (
        <div className={styles.default}>
            <TeamNameDropdown name={team.name}/>
        </div>
    );
}
