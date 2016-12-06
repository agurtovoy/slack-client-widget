import React from 'react';
import _ from 'lodash';
import MessageEntry from '../message-entry';
import styles from './message-group.css';

export default ( { messages } ) =>
    <div className={styles.default}>
        <div className={styles.divider}><span>October 31st</span></div>
        <div className={styles.messages}>
            { _.map( messages, ( message ) =>
                <MessageEntry message={message} />
                ) }
        </div>
    </div>;
