import React from 'react';
import TeamsSidebarEntry from './components/teams-sidebar-entry';
import TeamsSidebarAddTeam from './components/teams-sidebar-add-team';
import styles from './teams-sidebar.css';

export default function TeamSwitcher( props ) {
    return (
        <div className={styles.default}>
            <TeamsSidebarEntry shortcut="1"/>
            <TeamsSidebarEntry shortcut="2"/>
            <TeamsSidebarAddTeam />
        </div>
    );
}
