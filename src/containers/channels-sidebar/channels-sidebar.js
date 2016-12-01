import React from 'react';
import ChannelsTeamMenu from './components/channels-team-menu';
import styles from './channels-sidebar.css';

export default function ChannelsSidebar( { team } ) {
    return (
        <div className={styles.default}>
            <ChannelsTeamMenu team={team} />
        </div>
    );
}
