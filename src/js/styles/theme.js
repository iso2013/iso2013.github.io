import { createMuiTheme } from "@material-ui/core";
import * as colors from '@material-ui/core/colors';

const josefinFont = {
    fontFamily: [
      'Josefin Sans',
      'Roboto'
    ].join(','),
    marginBottom: "-0.15em"
}

export default (state) => createMuiTheme({
    overrides: {
        MuiTypography: {
            display1: josefinFont,
            display2: josefinFont,
            display3: josefinFont,
            display4: josefinFont,
            title: josefinFont,
            headline: josefinFont,
            gutterBottom: {
                marginBottom: "0.35em"
            }
        },
        MuiPaper: {
            rounded: {
                borderRadius: 0
            }
        }
    },
    palette: {
        primary: colors["blue"],
        secondary: colors["orange"],
        error: colors["red"],
        type: state.type
    }
});