import React from 'react';
import UserAvatar from '../../../../../../components/user-avatar';
import styles from './message-gutter.css';

export default ( { message } ) =>
    <div className={styles.default}>
        <UserAvatar user={message.user} />
    </div>;
