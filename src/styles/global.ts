import { createGlobalStyle, DefaultTheme } from "styled-components"

 export default createGlobalStyle<DefaultTheme>`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html, body {
        height: 100%;
    }
    #root{
        margin:0 auto;
    }
 `