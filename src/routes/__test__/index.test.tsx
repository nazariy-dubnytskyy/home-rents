import * as React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render, RenderResult, fireEvent } from '../../utils/test-utils';
import Routes from '..';

let renderResult: RenderResult;

describe('Routes component', () => {
  beforeEach(() => {
    renderResult = render(<Routes />);
  });

  it('renders correctly', () => {
    const { container } = renderResult;

    expect(container.firstChild).toMatchSnapshot();
  });

  it('Home link goes to Home page', () => {
    const { getByText } = renderResult;
    const link = getByText('Home').closest('a');

    fireEvent.click(link);
    expect(document.body.textContent).toContain('Home page');
  })

  it('Register link goes to Register page', () => {
    const { getByText } = renderResult;
    const link = getByText('Register').closest('a');

    fireEvent.click(link);
    expect(document.body.textContent).toContain('RegisterTenant page');
  })

});