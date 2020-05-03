import * as React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render, RenderResult } from '../../../utils/test-utils';
import Navigation from '..';
import { BrowserRouter } from 'react-router-dom';

let renderResult: RenderResult;

describe('Navigation component', () => {
  beforeEach(() => {
    renderResult = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  });

  it('renders correctly', () => {
    const { container } = renderResult;

    expect(container.firstChild).toMatchSnapshot();
  });

  it('contains Home and Register links', () => {
    const { getByText } = renderResult;
    const homeLink = getByText('Home').closest('a');
    const registerLink = getByText('Register').closest('a');

    expect(homeLink).toHaveAttribute('href', '/');
    expect(registerLink).toHaveAttribute('href', '/register-tenant');
  });
});