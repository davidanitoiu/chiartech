import { createMuiTheme } from '@material-ui/core';
import {cyan, lightBlue} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: lightBlue,
        secondary: cyan
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

export default theme;