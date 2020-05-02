import { DefaultTheme } from 'styled-components'

const color = {
  primary: '#282828',
  secondary: '#379683',
};

const background = {
  light: '#f1efe9',
  dark: '#8ee4af',
};

const fontSizes = {
  small: '12px',
  medium: '14px',
  large: '16px',
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
}

export { defaultTheme }