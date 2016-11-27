import React from 'react';
import TeamsSidebarEntry from './components/teams-sidebar-entry';
import styles from './teams-sidebar.css';

export default function TeamSwitcher( props ) {
    return (
        <div className={styles.default}>
            <TeamsSidebarEntry shortcut="⌘1"/>
            <TeamsSidebarEntry shortcut="⌘2"/>
        </div>
    );
}
