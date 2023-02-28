export const MEDIA_MOBILE_LARGE = 375;
export const MEDIA_TABLET = 681;
export const MEDIA_TABLET_LARGE = 1024;
export const MEDIA_DESKTOP_SMALL = 1100;
export const MEDIA_DESKTOP_MEDIUM = 1300;
export const MEDIA_DESKTOP_LARGE = 1440;
export const MEDIA_DESKTOP_XLARGE = 1720;
export const MEDIA_DESKTOP_XXLARGE = 1920;

export const THEME = {
  border: {
    radius: {
      regular: "4px",
      rounded: "50%"
    }
  },
  color: {
    white: "#FFFFFF",
    grayLightest: "#FCFCFC",
    grayLighter: "#F3F3F3",
    grayLight: "#E2E2E2",
    grayMediumLight: "#DDDDDD",
    grayMedium: "#EAEAEA",
    grayDark: "#555555",
    blueBackground: "#F9F9F9",
    blue: "#0000FF",
    blueDark: "#194553",
    black: "#000000"
  },
  font: {
    weight: {
      regular: 400,
      medium: 500,
      bold: 700
    },
    style: {
      normal: "normal",
      italic: "italic"
    },
    size: {
      small: "1.2rem",
      regular: "1.4rem",
      large: "1.6rem",
      section: "2rem",
      header: "2.4rem"
    }
  },
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
  spacing: {
    xs: ".4rem",
    s: ".8rem",
    sm: "1.2rem",
    m: "1.6rem",
    l: "2.4rem",
    xl: "3.2rem"
  },
  zIndex: {
    hidden: -1,
    popover: 10,
    modal: 100
  }
} as const;
