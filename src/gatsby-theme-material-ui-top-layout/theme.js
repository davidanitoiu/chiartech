import { createMuiTheme } from "@material-ui/core";
import {lightBlue, teal} from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: teal,
        secondary: lightBlue
    },
    typography: {
        fontFamily: [
            'Titillium Web',
            "Roboto", "Helvetica", "Arial",
            'sans-serif'
        ].join(','),
    },
});

export default theme;