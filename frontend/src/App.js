import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './common/components/Navbar';
import HomePage from './pages/Home/HomePage';
import { PageTwo } from './pages/Page2';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/page2' exact component={PageTwo} />
    </Switch>
  </BrowserRouter>
);

export default App;
