// Vendors
import { createGlobalStyle } from 'styled-components';

/*
 *
 */
export const BaseGlobalStyles = createGlobalStyle`
	html, body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		font-size:7.5px;

		-moz-osx-font-smoothing:grayscale;
		-webkit-font-smoothing:antialiased;
		text-size-adjust:none;

		height:100%;

		background:${({ theme }) => theme.color.gray_lighter};
	}

	body {
		margin: 0;
	}

	#root {
		height:100%;
	}

	@media (${props => props.theme.media.mobile_large}) {
		html, body {
			font-size:8px;
		}
	}

	@media (${props => props.theme.media.tablet}) {
		html, body {
			font-size:8.25px;
		}
	}

	@media (${props => props.theme.media.tablet_large}) {
		html, body {
			font-size:8.5px;
		}
	}

	@media (${props => props.theme.media.desktop_small}) {
		html, body {
			font-size:9px;
		}
	}

	@media (${props => props.theme.media.desktop_medium}) {
		html, body {
			font-size:9.25px;
		}
	}

	@media (${props => props.theme.media.desktop_large}) {
		html, body {
			font-size:9.5px;
		}
	}

	@media (${props => props.theme.media.desktop_xlarge}) {
		html, body {
			font-size:10px;
		}
	}

	@media (${props => props.theme.media.desktop_xxlarge}) {
		html, body {
			font-size:10.5px;
		}
	}

`;
