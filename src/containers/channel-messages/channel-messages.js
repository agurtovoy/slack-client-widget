import React from 'react';
import MessagesHeader from './containers/messages-header';
import MessagesScroller from './containers/messages-scroller';
import MessagesFooter from './containers/messages-footer';
import styles from './channel-messages.css';

const messages = [
    {
        "type": "message",
        "ts": "9:42 PM",
        "user": "agurtovoy",
        "text": "joined #hunt-of-the-day",
        "automated": true
    }
];


export default ( { ...props } ) =>
    <div className={styles.default}>
        <MessagesHeader { ...props } />
        <MessagesScroller messages={messages} channel={props.channel} />
        <MessagesFooter { ...props } />
    </div>;
