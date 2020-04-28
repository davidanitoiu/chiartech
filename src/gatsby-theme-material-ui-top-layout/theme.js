import { createMuiTheme,responsiveFontSizes  } from '@material-ui/core';
import {cyan, deepOrange} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: cyan,
        secondary: deepOrange
    },
    typography: {
        h1: {
            fontFamily: [
                'Electrolize',
                'Roboto', 'Helvetica', 'Arial',
                'sans-serif'
            ].join(',')
        },
        fontFamily: [
            'Titillium Web',
            'Roboto', 'Helvetica', 'Arial',
            'sans-serif'
        ].join(','),
    },
});

export default responsiveFontSizes(theme);