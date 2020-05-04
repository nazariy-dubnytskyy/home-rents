import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string,
      secondary: string,
      almostWhite: string,
      lightGrey: string,
      darkGrey: string,
    }

    background: {
      light: string,
      dark: string,
    }

    fontSizes: {
      small: string,
      medium: string,
      large: string,
      xlarge: string;
    }

    font: {
      family: string,
      defaultSize: string,
    }

    spaceUnit: {
      half: string,
      one: string,
      two: string,
      three: string,
      four: string,
      five: string,
    }
  }
}