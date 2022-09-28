import styled from 'styled-components';
// import {Link} from 'react-router-dom';

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: Gray;
  padding: 20px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: white;
`;

export {
  Navbar,
  Links,
};