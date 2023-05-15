import { extendTheme } from '@chakra-ui/react'
 
  export const theme = extendTheme({ 
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        grays: {
            100: "#EDF2F7",
            50: "#F7FAFC",

        },
    },
    fonts: {
        heading: "Roboto",
        body: "source-code-pro",
        //body: "sans-serif",
    },
    breakpoints: {
        sm: '440px',
        //md: 768px,
        md: '700px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1400px',
    },    
});