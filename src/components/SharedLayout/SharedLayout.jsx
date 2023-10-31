import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavigationList } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <div>
        <div>
          <header>
            <nav>
              <NavigationList>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/movies">Movies</NavLink>
                </li>
              </NavigationList>
            </nav>
          </header>
          <Suspense fallback={<div> Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SharedLayout;
