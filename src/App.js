import React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Head } from 'react-static';
import Routes from 'react-static-routes';
import './app.scss';


const App = () => (
  <Router>
    <div>
      <Head>
        <title>Directory</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
