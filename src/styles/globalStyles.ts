import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";
import { pxToRem } from "@/utils";

export const GlobalStyle = createGlobalStyle<{ theme?: DefaultTheme }>`
    html, body {        
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        background: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
    }

    h1, h2, p, ul, li, figure {
        margin: 0;
        padding: 0;
    }

    .mb-1 {
        margin-bottom: ${pxToRem(16)};
    }

    .mb-2 {
        margin-bottom: ${pxToRem(32)};
    }
`;
