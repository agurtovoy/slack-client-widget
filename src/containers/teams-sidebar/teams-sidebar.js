import React from 'react';
import _ from 'lodash';
import TeamsSidebarEntry from './components/teams-sidebar-entry';
import TeamsSidebarAddTeam from './components/teams-sidebar-add-team';
import styles from './teams-sidebar.css';

export default function TeamSwitcher( props ) {
    const { teams, selected } = props;
    return (
        <div className={styles.default}>
            { _.map( teams, ( team, i ) => <TeamsSidebarEntry
                team={team}
                shortcut={i + 1}
                selected={team.id == selected}
                /> ) }
            <TeamsSidebarAddTeam />
        </div>
    );
}
