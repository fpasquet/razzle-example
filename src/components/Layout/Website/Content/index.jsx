import React from 'react';

import './styles.scss';

const Content = ({ children }) => (
  <main className="contentLayout">
    <div>{children}</div>
  </main>
);

export default Content;
