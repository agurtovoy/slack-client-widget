import React from 'react';
import AddTeamIcon from '../add-team-icon';
import styles from './teams-sidebar-add-team.css';

export default function TeamsSidebarAddTeam( props ) {
    return (
        <div className={styles.default}>
            <AddTeamIcon />
        </div>
    );
}
