// Vendors
import React from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

// Theme
import { THEME } from 'styles/theme';
import { BaseGlobalStyles } from 'styles/base';

// Locales
import en from 'locales/en';
import fr from 'locales/fr';

// Connections
import useLang from 'connections/useLang';

interface IProps {
	children: React.ReactNode
}

function Base ({ children }: IProps) {

	const MESSAGES: any = JSON.stringify({
		en: en,
		fr: fr
	});

	const { lang } = useLang();

	return (
		<IntlProvider locale={lang.code} messages={MESSAGES[lang.code]}>
			<ThemeProvider theme={THEME}>
				<React.Fragment>
					<BaseGlobalStyles />
					{children}
				</React.Fragment>
			</ThemeProvider>
		</IntlProvider>
	);

}

export default Base;
