import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
    }
    button{
        vertical-align: top;
    }
`;

export default GlobalStyles;