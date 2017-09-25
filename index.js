import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style/index.less'

// main routes
import AppRoutes from './routes';

import store from './store';

import 'react-select/dist/react-select.css';

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('app')
)