import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icons } from '../../components/Icons/icons';

const Logo = () => {
	return (
    <NavLink to="/">
      <Icons
              name="logo"
              className=""
              color="#121D2E"
              width="129"
              height="28"
            />
    </NavLink>
  );
};

export default Logo;