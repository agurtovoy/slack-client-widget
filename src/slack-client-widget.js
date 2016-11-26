import React, {Component} from 'react';

import MacOSWindowButtons from './components/macos-window-buttons';

import './slack-client-widget.less';

class SlackClientWidget extends Component {
    render() {
        return (
            <div className="slack-client-widget">
                <MacOSWindowButtons />
            </div>
            );
    }
}

export default SlackClientWidget;
