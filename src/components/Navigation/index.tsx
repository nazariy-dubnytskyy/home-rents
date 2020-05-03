import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  Wrapper,
  Menu,
  MenuItem,
} from './styles';

function Navigation() {
  return (
    <Wrapper>
      <Menu>
        <MenuItem><Link to='/'>Home</Link></MenuItem>
        <MenuItem><Link to='/register-tenant'>Register</Link></MenuItem>
      </Menu>
    </Wrapper>
  )
}

export default Navigation;