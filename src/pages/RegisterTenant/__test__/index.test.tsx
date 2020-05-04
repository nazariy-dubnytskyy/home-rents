import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render } from '../../../utils/test-utils';
import RegisterTenant from '..';

describe('Home page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <RegisterTenant />
      </BrowserRouter>
    );


    expect(container.firstChild).toMatchSnapshot();
  });
});