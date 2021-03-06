import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: '3rem',
        },
        h5: {
            fontSize: '1.25rem',
        },
    },
    palette: {
        primary: {
            main: '#17a2b8',
        },
        secondary: {
            main: 'rgb(197,208,222)',
        },
        background: {
            default: 'rgb(247, 247, 247)',
        },
    },
    overrides: {
        // Style sheet name
        MuiButton: {
            // Name of the rule
            containedPrimary: {
                background: '#17a2b8',
                textTransform: 'capitalize',
                borderRadius: 3,
                color: 'white',
                padding: '4 20px',
                fontSize: '1rem',
            },
        },
    },
});
