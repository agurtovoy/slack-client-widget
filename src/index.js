import React from 'react';
import ReactDOM from 'react-dom';
import SlackClientWidget from './slack-client-widget';
import 'suitcss-base';
import './index.less';

ReactDOM.render(
  <SlackClientWidget />,
  document.getElementById('root')
);
