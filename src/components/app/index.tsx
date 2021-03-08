// Vendors
import React from 'react';

// Components
import Bar, { IProps as IBar } from './bar';

// Styles
import { App as Root, Body } from './styles';

interface IProps extends IBar {
	children: React.ReactNode
}

function App ({ children, onSwitchLang, routes, lang_code }: IProps) {

	return (
		<Root>
			<Bar
				routes={routes}
				lang_code={lang_code}
				onSwitchLang={onSwitchLang}
			/>
			<Body>
				{children}
			</Body>
		</Root>
	);

}

App.defaultProps = {
	routes: []
};

export default App;
