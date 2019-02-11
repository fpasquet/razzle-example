import React from 'react';
import { hydrate } from 'react-dom';
import { loadComponents } from 'loadable-components';
import Root from './components/Root';

// Load all components needed before rendering
loadComponents().then(() => {
  hydrate(<Root />, document.getElementById('root'));
});

if (module.hot) {
  module.hot.accept();
}
