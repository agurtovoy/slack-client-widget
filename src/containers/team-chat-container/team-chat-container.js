import React from 'react';
import ChannelsSidebar from '../channels-sidebar';
import MessagesContainer from '../messages-container';
import styles from './team-chat-container.css';

export default function TeamChatContainer( props ) {
    return (
        <div className={styles.default}>
            <ChannelsSidebar team={props.team}/>
            <MessagesContainer />
        </div>
    );
}
