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

const channels = [
    { id: '1', name: 'adobemax' },
    { id: '2', name: 'ama' },
    { id: '3', name: 'bestpractices' },
    { id: '4', name: 'creativemornings' },
    { id: '5', name: 'general' },
    { id: '6', name: 'humblebrag' },
    { id: '7', name: 'hunt-of-the-day' },
    { id: '8', name: 'inhouse-creative' },
    { id: '9', name: 'inhouse-marketing' },
    { id: '10', name: 'introductions' },
    { id: '11', name: 'jobs' },
    { id: '12', name: 'quote-of-the-day' },
    { id: '13', name: 'reading' },
    { id: '14', name: 'shamelessplug' },
    { id: '15', name: 'tools' }
    ];


class SlackClientWidget extends Component {
    render() {
        const currentTeam = teams[2];
        currentTeam.channels = channels;
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
