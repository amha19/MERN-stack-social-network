import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: '2.5rem',
        },
        h3: {
            fontSize: '1.4rem',
            fontWeight: '600',
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
            default: '#FFF',
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
                padding: '4 20',
                fontSize: '1rem',
            },
            containedSecondary: {
                backgroundColor: '#e0e0e0',
                textTransform: 'capitalize',
                borderRadius: 3,
                color: 'black',
                padding: '4 20',
                fontSize: '1rem',
            },
        },
    },
});
