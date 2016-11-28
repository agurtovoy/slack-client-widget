import React, {Component} from 'react';

import MacOSWindowButtons from './components/macos-window-buttons';
import TeamsSidebar from './containers/teams-sidebar';
import TeamChatContainer from './containers/team-chat-container';

import '@nextspark/webfont-lato-latin';
import './slack-client-widget.less';

const teams = [
    { id: 'team1', icon: '', activity: { unread: true, mentions: 2 } },
    { id: 'team2', icon: '', activity: { unread: true } },
    { id: 'team3', icon: '', activity: { mentions: 5 } }
    ];


class SlackClientWidget extends Component {

    render() {
        return (
            <div className="slack-client-widget">
                <MacOSWindowButtons />
                <TeamsSidebar teams={teams} selected={teams[1].id}/>
                <TeamChatContainer />
            </div>
            );
    }
}

export default SlackClientWidget;
