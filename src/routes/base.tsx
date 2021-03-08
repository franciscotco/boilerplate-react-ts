// Vendors
import React from 'react';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

// Types
import ILang from 'types/lang';

// Theme
import { THEME } from 'styles/theme';
import { BaseGlobalStyles } from 'styles/base';

// Locales
import MESSAGES from 'locales';

interface IProps {
	children: JSX.Element,
	lang_code: ILang
}

function Base ({ children, lang_code }: IProps): JSX.Element {

	return (
		<IntlProvider locale={lang_code} messages={MESSAGES[lang_code]}>
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
