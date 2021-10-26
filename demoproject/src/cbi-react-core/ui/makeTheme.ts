import { createTheme } from "@material-ui/core"
import blue from "@material-ui/core/colors/blue"
import green from "@material-ui/core/colors/green"

// const theme = {
//     palette: {
//         primary: {

//         },
//         secondaryColor: '#',
//         grayColor: '#'
//     },
//     button: {
//         height: 40,
//         radius: 5,
//     },
//     padding: {
//         sm: 10,
//         md: 20,
//         lg: 50,
//     },
    
    
// }


const theme = createTheme({
    palette: {
        primary: {
            main: blue[800]
        },
        secondary: {
            main: green[800]
        }
    },
    breakpoints: {
        
    }
})


export const makeTheme = (options : RecursivePartial<typeof theme>) => {
    
}