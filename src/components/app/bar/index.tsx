// Vendors
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink, useLocation } from 'react-router-dom';

// Types
import IRoutes from 'types/routes';
import ISupportedLanguages from 'types/lang';

// Data
import { supportedLanguages } from 'data';

// Styles
import {
	Root,
	Bar, Part,
	RouteList, RouteLink, RouteItem, Heading3,
	LangList, LangItem, LangLink
} from './styles';

export interface IProps {
	onSwitchLang: (arg0: ISupportedLanguages) => void,
	lang_code: ISupportedLanguages,
	routes: IRoutes[]
}

function AppBar ({ onSwitchLang, lang_code, routes }: IProps) {

	const location = useLocation();

	const onClick = (lang: ISupportedLanguages) => () => onSwitchLang(lang);

	return (
		<Root>
			<Bar>
				<Part>
					<RouteList>
						{routes.map(route => (
							<RouteItem key={route.id}>
								<RouteLink
									as={NavLink}
									to={route.path}
									$is_active={!!location.pathname.includes(route.path)}
								>
									<Heading3>
										<FormattedMessage id={`ROUTES.${route.name.toUpperCase()}.NAME`} />
									</Heading3>
								</RouteLink>
							</RouteItem>
						))}
					</RouteList>
				</Part>
				<Part>
					<LangList>
						{supportedLanguages.map(code => (
							<LangItem
								key={code}
							>
								<LangLink
									onClick={onClick(code)}
									is_active={code === lang_code}
								>
									{code.toUpperCase()}
								</LangLink>
							</LangItem>
						))}
					</LangList>
				</Part>
			</Bar>
		</Root>
	);

}

export default AppBar;
