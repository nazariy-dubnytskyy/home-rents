import * as React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import { render } from '../../../utils/test-utils';
import Home from '..';

describe('Home page', () => {
  it('renders correctly', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toMatchSnapshot();
  });
});