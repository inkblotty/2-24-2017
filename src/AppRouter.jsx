import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import RecipeList from './pages/RecipeList';
import TopNav from './pages/TopNav';

class AppRouter extends Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route component={ TopNav } path='/'>
          <IndexRedirect to='all' />
          <Route path=':filter' component={ RecipeList } />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
