import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <ul>
      <li>
        <NavLink to="/login">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/register">Sign up</NavLink>
      </li>
    </ul>
  );
};
