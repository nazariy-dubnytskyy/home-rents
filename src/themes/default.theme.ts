import { DefaultTheme } from 'styled-components'

const spaceUnit = {
  half: '4px',
  one: '8px',
  two: '16px',
  three: '24px',
  four: '32px',
  five: '40px',
}

const color = {
  primary: '#7ac455',
  secondary: '#379683',

  almostWhite: '#fff',
  lightGrey: '#efefef',
  darkGrey: '#2e3642',
};

const background = {
  light: '#f7f7f7',
  dark: '#8ee4af',
};

const fontSizes = {
  small: '12px',
  medium: '14px',
  large: '16px',
  xlarge: '20px',
};

const font = {
  family: "'Open Sans', sans-serif",
  defaultSize: fontSizes.medium,
}


const defaultTheme: DefaultTheme = {
  color,
  background,
  fontSizes,
  font,
  spaceUnit,
}

export { defaultTheme }