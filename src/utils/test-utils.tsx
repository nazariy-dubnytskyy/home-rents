import * as React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../themes/default.theme';

const Providers = (props: any) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {props.children}
    </ThemeProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }