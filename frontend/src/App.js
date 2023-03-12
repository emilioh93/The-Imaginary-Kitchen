import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './common/components/Footer';
import Navbar from './common/components/Navbar';
import About from './pages/About/About';
import AddOrEditCategory from './pages/AdminCategories/AddOrEditCategory';
import AdminCategories from './pages/AdminCategories/AdminCategories';
import AddOrEditMenu from './pages/AdminMenu/AddOrEditMenu';
import AdminMenu from './pages/AdminMenu/AdminMenu';
import HomePage from './pages/Home/HomePage';
import Menu from './pages/Menu/Menu';

const App = () => {
  const isAdmin = true;

  return (
    <BrowserRouter>
      <Navbar isAdmin={isAdmin} />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/about' exact component={About} />
        {/* admin routes */}
        <Route path='/admin-categories' exact component={AdminCategories} />
        <Route path='/admin-categories/new' exact component={AddOrEditCategory} />
        <Route path='/admin-categories/edit/:id' exact component={AddOrEditCategory} />
        <Route path='/admin-menu' exact component={AdminMenu} />
        <Route path='/admin-menu/new' exact component={AddOrEditMenu} />
        <Route path='/admin-menu/edit/:id' exact component={AddOrEditMenu} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
