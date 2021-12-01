export const MEDIA_MOBILE_LARGE = 375;
export const MEDIA_TABLET = 681;
export const MEDIA_TABLET_LARGE = 1024;
export const MEDIA_DESKTOP_SMALL = 1100;
export const MEDIA_DESKTOP_MEDIUM = 1300;
export const MEDIA_DESKTOP_LARGE = 1440;
export const MEDIA_DESKTOP_XLARGE = 1720;
export const MEDIA_DESKTOP_XXLARGE = 1920;

export interface Theme {
  media: {
    mobileLarge: string;
    tablet: string;
    tabletLarge: string;
    desktopSmall: string;
    desktopMedium: string;
    desktopLarge: string;
    desktopXLarge: string;
    desktopXXLarge: string;
  };
  color: {
    white: string;
    grayLightest: string;
    grayLighter: string;
    grayLight: string;
    grayMediumLight: string;
    grayMedium: string;
    grayDark: string;
    blueBackground: string;
    blueDark: string;
  };
}

export const THEME: Theme = {
  media: {
    mobileLarge: `min-width: ${MEDIA_MOBILE_LARGE}px`,
    tablet: `min-width: ${MEDIA_TABLET}px`,
    tabletLarge: `min-width: ${MEDIA_TABLET_LARGE}px`,
    desktopSmall: `min-width: ${MEDIA_DESKTOP_SMALL}px`,
    desktopMedium: `min-width: ${MEDIA_DESKTOP_MEDIUM}px`,
    desktopLarge: `min-width: ${MEDIA_DESKTOP_LARGE}px`,
    desktopXLarge: `min-width: ${MEDIA_DESKTOP_XLARGE}px`,
    desktopXXLarge: `min-width: ${MEDIA_DESKTOP_XXLARGE}px`
  },
  color: {
    white: "#ffffff",
    grayLightest: "#fcfcfc",
    grayLighter: "#f3f3f3",
    grayLight: "#e2e2e2",
    grayMediumLight: "#dddddd",
    grayMedium: "#eaeaea",
    grayDark: "#555555",
    blueBackground: "#f9f9f9",
    blueDark: "#194553"
  }
};
