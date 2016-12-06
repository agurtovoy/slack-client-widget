import React from 'react';
import MessageGutter from './components/message-gutter';
import MessageContent from './components/message-content';
import styles from './message-entry.css';

export default ( { message } ) =>
    <div className={styles.default}>
        <MessageGutter message={message} />
        <MessageContent message={message} />
    </div>;
