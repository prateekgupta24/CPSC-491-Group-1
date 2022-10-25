import styled from "styled-components";

// need to split navbar to left and right
// left will have home, right will have login and subscriptions

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  background-color: lightgray;
  color: black;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
  z-index: 2;
`;

const Navleft = styled.div`
  display: flex;
  float: left;
  padding: 5px;
`;
const Navright = styled.div`
  display: flex;
  justify-content: right;
  padding: 5px;
`;

const Links = styled.div`
  margin: 7px;

  color: black;
  text-decoration: none;
`;

export { Nav, Navleft, Navright, Links };
