import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand:
        {
            50: '#e9f9fc',
            100: '#cce2e6',
            200: '#adccd3',
            300: '#8cb5c1',
            400: '#6c9eae',
            500: '#548395',
            600: '#406475',
            700: '#2d4653',
            800: '#192a33',
            900: '#021015',
        },
        close: 
        {
          50: '#ffe9ee',
          100: '#efc6cf',
          200: '#dda2ae',
          300: '#ce7e8e',
          400: '#bf5a6e',
          500: '#a54054',
          600: '#813141',
          700: '#5e232f',
          800: '#3a121b',
          900: '#1b0208',
        }
    }
})




const cores = {
    backgroundPadrao: '#1F333F', //'#2b2b2b',
    backgroundSecundario: '#234C63',
    toastBackgroundErro:'#D4536C',
    toastBackgroundSuccess:'#359C80'
}
export { cores, theme }