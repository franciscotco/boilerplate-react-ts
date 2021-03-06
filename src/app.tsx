// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// Base
import Base from './base';

// Store
import store from 'store';

// Routes
import Root from 'routes';


ReactDOM.render(
	<Provider store={store}>
		<Base>
			<BrowserRouter>
				<Route component={Root} />
			</BrowserRouter>
		</Base>
	</Provider>,
	document.getElementById('root')
);


/*
 * Accept hot reloads in dev mode
 */
if (module.hot) {
	module.hot.accept('./routes/index.tsx', () => {
		ReactDOM.render(
			<Provider store={store} key={Math.random()}>
				<Base>
					<BrowserRouter>
						{require('./routes/index.tsx').router}
					</BrowserRouter>
				</Base>
			</Provider>,
			document.getElementById('app')
		);
	});
}
