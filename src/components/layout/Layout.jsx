import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import {
  Container,
  Link,
  LinkBox,
  Main,
  NavList,
  Navigation,
  SpinStyle,
} from './Layout.styled';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <Navigation>
        <NavList>
          <LinkBox>
            <Link to={'/'} className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </LinkBox>

          <LinkBox>
            <Link
              to={'/catalog'}
              className={pathname === '/catalog' ? 'active' : ''}
            >
              Catalog
            </Link>
          </LinkBox>

          <LinkBox>
            <Link
              to={'/favorites'}
              className={pathname === '/favorites' ? 'active' : ''}
            >
              Favorites
            </Link>
          </LinkBox>
        </NavList>
      </Navigation>

      <Main>
        <Suspense
          fallback={
            <SpinStyle>
              <InfinitySpin color="#3470ff" />
            </SpinStyle>
          }
        >
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default Layout;
