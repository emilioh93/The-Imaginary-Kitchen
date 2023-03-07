import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './common/components/Footer';
import Navbar from './common/components/Navbar';
import About from './pages/About/About';
import AdminCategories from './pages/AdminCategories/AdminCategories';
import HomePage from './pages/Home/HomePage';
import Menu from './pages/Menu/Menu';

const App = () => {
  const isAdmin = true;

  return (
    <BrowserRouter>
      <Navbar isAdmin={isAdmin} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/menus' exact component={Menu} />
        <Route path='/about' exact component={About} />
        {/* admin routes */}
        <Route path='/admin-categories' exact component={AdminCategories} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
