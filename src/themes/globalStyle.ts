import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: ${props => props.theme.font.family};
    font-size: ${props => props.theme.font.defaultSize};
    background-color: ${props => props.theme.background.light};
  }
`;

export default GlobalStyle;