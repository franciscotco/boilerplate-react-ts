import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 12px / 1.4;
    @media (${({ theme }): string => theme.media.tabletLarge}) {
      font-size: 14px / 1.4;
    }
    @media (${({ theme }): string => theme.media.desktopXXLarge}) {
      font-size: 14px / 1.4;
    }
  }

	body {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: ${({ theme }): string => theme.font.size.regular};

    margin: 0;
	}
`;

export default GlobalStyle;
