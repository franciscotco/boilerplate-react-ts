// Vendors
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

// Store
import store from 'store';

// Routes
import Root from 'routes';


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route component={Root} />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


/*
 * Accept hot reloads in dev mode
 */
if (module.hot) {
	module.hot.accept(['./routes', './components/app'], () => {
		ReactDOM.render(
			<Provider store={store} key={Math.random()}>
				<BrowserRouter>
					{require('./routes/index.tsx').router}
				</BrowserRouter>
			</Provider>,
			document.getElementById('root')
		);
	});
}
