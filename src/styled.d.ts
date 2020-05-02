import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string,
      secondary: string
    }

    background: {
      light: string,
      dark: string,
    }

    fontSizes: {
      small: string,
      medium: string,
      large: string,
    }

    font: {
      family: string,
      defaultSize: string,
    }
  }
}