import {
  createTheme,
  responsiveFontSizes
} from '@material-ui/core';

import palette from './palette';

const theme = responsiveFontSizes(
  createTheme({
    palette,
    layout: {
      contentWidth: 1140,
    },
    typography: {
      fontFamily: 'Varela Round',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        containedSecondary: {
          color: 'white',
        },
      },
    },
  }),
);

export default theme;