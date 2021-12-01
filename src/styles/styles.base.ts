import { createGlobalStyle } from "styled-components";

const BaseGlobalStyles = createGlobalStyle`
	html, body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
		'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
		font-size:7.5px;

		-moz-osx-font-smoothing:grayscale;
		-webkit-font-smoothing:antialiased;
		text-size-adjust:none;

		height:100%;

		background:${({ theme }): string => theme.color.grayLighter};
	}

	body {
		margin: 0;
	}

	#root {
		height:100%;
	}


	/*
	 *  Media Query
	 */

	@media (${(props): string => props.theme.media.mobileLarge}) {
		html, body {
			font-size:8px;
		}
	}

	@media (${(props): string => props.theme.media.tablet}) {
		html, body {
			font-size:8.25px;
		}
	}

	@media (${(props): string => props.theme.media.tabletLarge}) {
		html, body {
			font-size:8.5px;
		}
	}

	@media (${(props): string => props.theme.media.desktopSmall}) {
		html, body {
			font-size:9px;
		}
	}

	@media (${(props): string => props.theme.media.desktopMedium}) {
		html, body {
			font-size:9.25px;
		}
	}

	@media (${(props): string => props.theme.media.desktopLarge}) {
		html, body {
			font-size:9.5px;
		}
	}

	@media (${(props): string => props.theme.media.desktopXLarge}) {
		html, body {
			font-size:10px;
		}
	}

	@media (${(props): string => props.theme.media.desktopXXLarge}) {
		html, body {
			font-size:10.5px;
		}
	}

`;

export default BaseGlobalStyles;
