import { error } from "console"

type PaletteColor = {
    light: string,
    main: string,
    dark: string
}
type Typography = {
    fontFamily: string,
    color: string,
    fontWeight: number | string,
    fontSize: number  | string,
    letterSpacing: number  | string,
    lineHeight: number  | string,
}

export interface TypeBackground {
    default: string;
    paper: string;
}
export interface TypeAction {
    active: string;
    hover: string;
    hoverOpacity: number;
    selected: string;
    selectedOpacity: number;
    disabled: string;
    disabledOpacity: number;
    disabledBackground: string;
    focus: string;
    focusOpacity: number;
    activatedOpacity: number;
}
export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
}

export type PaletteType = 'light' | 'dark';

type ThemeOptions = {
    palette: {
        background: TypeBackground,
        // action: TypeAction,
        divider: string,
        text:TypeText,
        type: PaletteType,
        grey: string,
        primary: PaletteColor,
        secondary: PaletteColor,
        error: PaletteColor,
        warning: PaletteColor,
        info: PaletteColor,
        success: PaletteColor,

    },
    typography: {
        h1: Typography,
        h2: Typography,
        h3: Typography,
        h4: Typography,
        h5: Typography,
        h6: Typography,
        subtitle1: Typography,
        subtitle2: Typography,
        body1: Typography,
        body2: Typography,
        button: Typography,
        caption: Typography,
        overline: Typography,
        htmlFontSize: number | string
    },
    spacing: number[],
    breakpoints: {},
    zIndex: {},
    transitions: {},
    components: {}
}

let palette : ThemeOptions['palette'] = {
    primary: {
        light: '#42a5f5',
        main: '#1976d2',
        dark: '#1565c0'
    },
    secondary: {
        light: '#ba68c8',
        main: '#9c27b0',
        dark: '#7b1fa2'
    },
    error: {
        light: '#ef5350',
        main: '#d32f2f',
        dark: '#c62828'
    },
    warning: {
        light: '#ff9800',
        main: '#ED6C02',
        dark: '#e65100'
    },
    info: {
        light: '#03a9f4',
        main: '#0288d1',
        dark: '#01579b'
    },
    success: {
        light: '#4caf50',
        main: '#2e7d32',
        dark: '#1b5e20'
    },
    background: {
        default: '#fff',
        paper: '#ccc'
    },
    divider: '',
    grey: '',
    text: {
        disabled: '#ccc',
        primary: '#000',
        hint: '#ccc',
        secondary: '#ccc'
    },
    type: 'light'
}

let fontFamily = ''

// let typography : ThemeOptions['typography'] = {
//     body1: {
//         color: palette.primary.main,
//         fontFamily: fontFamily,
//         fontSize: 14,
//         fontWeight: 500,
//         letterSpacing: 0,
//         lineHeight: 20
//     },
//     body2: {
//         color: palette.primary.light,
//     }
// }



// let defaultTheme: ThemeOptions = {
//     breakpoints: {},
//     components: {},
//     palette,
//     spacing: [],
//     transitions: {},
//     typography,
//     zIndex: {}
// }
// export const createTheme = (themeOptions: RecursivePartial<ThemeOptions>): ThemeOptions => {

// }

export const createTheme = () => {}