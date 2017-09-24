import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {Home} from './containers/';

export default () => {
	return (
		<BrowserRouter>
			<Switch>
			  <Route exact path='/' component={Home}/>
			</Switch>
		</BrowserRouter>
	)
}
