import styled from "styled-components";

const SignupStyle = styled.div`
  background-color: #282c34;
  color: white;
  height: 100vh;
`;

const SignupForm = styled.form`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
  background-color: whitesmoke;
  min-width: 40vw;
`;

const SignupTitle = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

export { SignupStyle, SignupForm, SignupTitle };
