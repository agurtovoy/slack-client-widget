import React from 'react';
import MessagesHeader from './containers/messages-header';
import MessagesScroller from './containers/messages-scroller';
import MessagesFooter from './containers/messages-footer';
import styles from './channel-messages.css';

export default ( { ...props } ) =>
    <div className={styles.default}>
        <MessagesHeader { ...props } />
        <MessagesScroller { ...props } />
        <MessagesFooter { ...props } />
    </div>;
