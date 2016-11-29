import React, {Component} from 'react';

import MacOSWindowButtons from './components/macos-window-buttons';
import TeamsSidebar from './containers/teams-sidebar';
import TeamChatContainer from './containers/team-chat-container';

import '@nextspark/webfont-lato-latin';
import './slack-client-widget.less';

const teams = [
    { id: 'team1', activity: { unread: true } },
    { id: 'team2', activity: { unread: true, mentions: 2 } },
    { id: 'team3', activity: { mentions: 5 } }
    ];


class SlackClientWidget extends Component {

    render() {
        return (
            <div className="slack-client-widget">
                <MacOSWindowButtons />
                <TeamsSidebar teams={teams} selected={teams[2].id}/>
                <TeamChatContainer />
            </div>
            );
    }
}

export default SlackClientWidget;
