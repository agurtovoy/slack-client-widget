import React, {Component} from 'react';

import MacOSWindowButtons from './components/macos-window-buttons';
import TeamSwitcher from './components/team-switcher';
import TeamChatContainer from './containers/team-chat-container';

import '@nextspark/webfont-lato-latin';
import './slack-client-widget.less';

class SlackClientWidget extends Component {
    render() {
        return (
            <div className="slack-client-widget">
                <MacOSWindowButtons />
                <TeamSwitcher />
                <TeamChatContainer />
            </div>
            );
    }
}

export default SlackClientWidget;
