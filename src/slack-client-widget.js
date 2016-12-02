import React, {Component} from 'react';

import MacOSWindowButtons from './components/macos-window-buttons';
import TeamsSidebar from './containers/teams-sidebar';
import TeamChatContainer from './containers/team-chat-container';

import '@nextspark/webfont-lato-latin';
import './slack-client-widget.less';

const teams = [
    { id: 'team1', name: 'Team 1', activity: { unread: true } },
    { id: 'team2', name: 'Team 2', activity: { unread: true, mentions: 2 } },
    { id: 'team3', name: 'Next Spark Community', activity: { mentions: 5 } }
    ];


class SlackClientWidget extends Component {
    render() {
        const currentTeam = teams[2];
        const currentUser = { id: 'agurtovoy' }
        return (
            <div className="slack-client-widget">
                <MacOSWindowButtons />
                <TeamsSidebar teams={teams} selected={currentTeam.id}/>
                <TeamChatContainer team={currentTeam} user={currentUser}/>
            </div>
            );
    }
}

export default SlackClientWidget;
