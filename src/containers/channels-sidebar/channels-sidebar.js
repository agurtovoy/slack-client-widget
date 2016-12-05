import React from 'react';
import ChannelsTeamMenu from './components/channels-team-menu';
import ChannelsScroller from '../channels-scroller';
import QuickSwitcher from '../quick-switcher';
import styles from './channels-sidebar.css';

export default function ChannelsSidebar( { ...props } ) {
    return (
        <div className={styles.default}>
            <ChannelsTeamMenu { ...props } />
            <ChannelsScroller { ...props } />
            <QuickSwitcher { ...props } />
        </div>
    );
}
