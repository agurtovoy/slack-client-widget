import React from 'react';
import _ from 'lodash';
import ChannelEntry from '../channel-entry';
import styles from './channel-list.css';

export default ( { channels, user } ) =>
    <ul className={styles.default}>
        { _.map( channels, ( channel ) =>
            <ChannelEntry
                channel={channel}
                /> ) }
    </ul>;
