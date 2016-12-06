import React from 'react';
import MessageStream from '../message-stream';
import styles from './messages-scroller.css';

export default ( { ...props } ) =>
    <div className={styles.default}>
        <MessageStream { ...props } />
    </div>;
