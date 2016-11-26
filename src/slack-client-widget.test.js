import React from 'react';
import ReactDOM from 'react-dom';
import SlackClientWidget from './slack-client-widget';

it( 'renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <SlackClientWidget />, div );
} );
