import React from 'react';
import ChannelsSidebar from '../channels-sidebar';
import MessagesContainer from '../messages-container';
import styles from './team-chat-container.css';

export default function TeamChatContainer( { team, user, channels, ims } ) {
    var activeChannel = channels[6];
    return (
        <div className={styles.default}>
            <ChannelsSidebar team={team} user={user} channels={channels} ims={ims} activeChannel={activeChannel} />
            <MessagesContainer channel={activeChannel} />
        </div>
    );
}
