import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';
import Tanks from '../pages/Tanks';


import '../assets/scss/styles.scss';

function App() {
  return (

    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gracias" component={Tanks} />
          <Route path="*" component={Page404} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
