import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './common/components/Footer';
import Navbar from './common/components/Navbar';
import About from './pages/About/About';
import HomePage from './pages/Home/HomePage';
import Menu from './pages/Menu/Menu';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/menus' exact component={Menu} />
      <Route path='/about' exact component={About} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
