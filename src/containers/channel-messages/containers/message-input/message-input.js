import React from 'react';
import { NewUploadIcon } from '../../../../components/svg-icons';
import styles from './message-input.css';

export default ( { channel } ) =>
    <div className={styles.default}>
        <textarea className={styles.input} autoCorrect="off" autoComplete="off" spellCheck="true" placeholder={"Message #" + channel.name} />
        <a className={styles.upload}><NewUploadIcon className={styles.icon}/></a>
    </div>;
