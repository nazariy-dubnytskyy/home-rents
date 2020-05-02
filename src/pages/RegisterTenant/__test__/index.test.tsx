import * as React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render } from '../../../utils/test-utils';
import RegisterTenant from '..';

describe('Home page', () => {
  it('render correctly', () => {
    const { container, getByText } = render(<RegisterTenant />);

    expect(getByText('RegisterTenant page')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});