import React from 'react';
import ChannelsTeamMenu from './components/channels-team-menu';
import ChannelsContainer from '../channels-container';
import QuickSwitcher from '../quick-switcher';
import styles from './channels-sidebar.css';

export default function ChannelsSidebar( { team, user } ) {
    return (
        <div className={styles.default}>
            <ChannelsTeamMenu team={team} user={user} />
            <ChannelsContainer team={team} user={user} />
            <QuickSwitcher team={team} user={user} />
        </div>
    );
}
