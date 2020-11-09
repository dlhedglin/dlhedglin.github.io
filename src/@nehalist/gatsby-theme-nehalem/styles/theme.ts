import {DefaultTheme} from '@nehalist/gatsby-theme-nehalem';

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#fafafa`,
    primaryColor: `#8f41e1`,
    linkColor: `#a4cbb8`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `50vh`,
      background: `linear-gradient(-45deg, #282136, #44475a) repeat scroll 0 0 transparent`,
    },
  },
};

export default Theme;
