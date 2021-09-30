import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    ${'' /* @import url('https://fonts.googleapis.com/css2?family=Anton&family=Glory&display=swap'); */}
    body{
        position: relative;
    }
    *{
        
        padding: 0;
        margin: 0 ;
        font-family: 'Anton', sans-serif;
    }

`

export default GlobalStyles