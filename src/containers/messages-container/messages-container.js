import React from 'react';
import MessagesHeader from './containers/messages-header';
import MessagesScroller from './containers/messages-scroller';
import MessagesFooter from './containers/messages-footer';
import styles from './messages-container.css';

export default function MessagesContainer() {
    return (
        <div className={styles.default}>
            <MessagesHeader />
            <MessagesScroller />
            <MessagesFooter />
        </div>
    );
}
