import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

import './styles.scss';

const WebsiteLayout = () => {
  return (
    <Fragment>
      <Helmet>
        <html lang="en" />
      </Helmet>
      <div className="websiteLayout">
        <Header />
        <Content>
          <h1>Home</h1>
        </Content>
        <Footer />
      </div>
    </Fragment>
  );
};

export default WebsiteLayout;
