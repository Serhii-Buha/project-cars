import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Navigation = styled.nav`
  padding: 10px 0px;
  position: fixed;
  background-color: var(--form-select-bg-color);
  z-index: 5;
  top: 0;
  left: 0;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Main = styled.main`
  margin-top: 100px;
  max-width: 1440px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Link = styled(NavLink)`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
  display: block;
  padding: 14px 20px;
  margin: 0;

  :hover,
  :focus {
    background-color: var(--button-bg-color-hover);
    color: white;
    border-radius: 10px;
  }
`;

export const LinkBox = styled.li`
  margin-right: 30px;
`;

export const SpinStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
