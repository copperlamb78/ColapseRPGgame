import styled, { createGlobalStyle } from "styled-components";

// .jacquard-12-regular {
//   font-family: "Jacquard 12", serif;       Font de inimigo
// }

// .silkscreen-regular {
//     font-family: "Silkscreen", sans-serif;  Font regular
//   }
  

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-size: 12;
        font-family: "Silkscreen", sans-serif;

        @media(min-width: 300px) and (max-width: 425px) {
            font-size: 16px;
        }
        @media(min-width: 1440px) {
            font-size: 20px;
        }
        @media(min-width: 1800px){
            font-size: 32px;
        }
    }

    body {
        background-color: ${props => props.theme.colors["black"]};
    }

`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 100dvh;
`