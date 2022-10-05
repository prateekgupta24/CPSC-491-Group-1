import styled from 'styled-components';

// need to split navbar to left and right
// left will have home, right will have login and subscriptions

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  background: transparent;
  background-color: aliceblue;
  color: black;
  overflow: hidden;
  
`;


const Navleft = styled.div`
  display: flex;
  flex: 50%;
  float: left;
  padding: 5px;
  
  
`;
const Navright = styled.div`
  display: flex;
  flex: 50%;
  justify-content: right;
  padding: 5px;
`;

const Links = styled.div`
  margin: 10px;
  justify-content: space-between;
  color: black;

`;

export {
  Nav,
  Navleft,
  Navright,
  Links,
};