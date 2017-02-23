import React, { Component } from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import RecipeListContainer from './pages/RecipeListContainer';
import TopNavContainer from './pages/TopNavContainer';

class AppRouter extends Component {
    render() {
        return (
            <Router history={ browserHistory }>
                <Route component={ TopNavContainer } path='/'>
                    <IndexRedirect to='all' />
                    <Route path=':filter' component={ RecipeListContainer } />
                </Route>
            </Router>
        );
    }
}

export default AppRouter;
