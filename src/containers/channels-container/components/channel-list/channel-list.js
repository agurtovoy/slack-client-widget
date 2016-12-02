import React from 'react';
import _ from 'lodash';
import ChannelEntry from '../channel-entry';
import styles from './channel-list.css';

export default ( { team, user } ) =>
    <ul className={styles.default}>
        { _.map( team.channels, ( channel ) =>
            <ChannelEntry
                channel={channel}
                /> ) }
    </ul>;
    // selected={channel.id == selectedChannel}
