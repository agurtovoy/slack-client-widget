import React from 'react';
// import { NewUploadIcon } from '../../../../components/svg-icons';
import styles from './message-content.css';

export default ( { message } ) =>
    <div className={styles.default}>
        <div className={styles.header}>
            <a className={styles.username}>{message.user}</a>
        </div>
        <div className={ styles[ message.automated ? 'automated' : 'body' ] }>{message.text}</div>
    </div>;
