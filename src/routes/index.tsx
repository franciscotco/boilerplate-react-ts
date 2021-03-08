// Vendors
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Connections
import useLang from 'connections/useLang';

// Base
import Base from './base';

// Routes
import { getRoutes } from './routes';

// Components
import App from 'components/app';

function Root () {

	const routes = getRoutes();
	const { lang, setLang } = useLang();

	return (
		<Base
			lang_code={lang.code}
		>
			<App
				routes={routes}
				lang_code={lang.code}
				onSwitchLang={setLang}
			>
				<Switch>
					{routes.map(({ exact, Component, path, id }) => (
						<Route key={id} path={path} exact={exact} component={Component} />
					))}
					<Route render={() => <Redirect to="/home" />} />
				</Switch>
			</App>
		</Base>
	);

}

export default Root;
