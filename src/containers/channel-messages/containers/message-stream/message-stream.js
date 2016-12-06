import React from 'react';
import MessageStreamStart from '../message-stream-start';
import MessageGroup from '../message-group';
import styles from './message-stream.css';

export default ( { messages, channel } ) =>
    <div className={styles.default}>
    <MessageStreamStart channel={channel} />
    <MessageGroup messages={messages} />
    </div>;
