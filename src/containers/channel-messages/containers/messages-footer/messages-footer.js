import React from 'react';
import MessageInput from '../message-input';
import styles from './messages-footer.css';

export default ( { ...props } ) =>
    <div className={styles.default}>
        <MessageInput { ...props } />
    </div>;
