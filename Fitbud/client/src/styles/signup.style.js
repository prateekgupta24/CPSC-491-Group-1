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
  padding: 2rem;
  min-width: 40vw;
`;

const SignupTitle = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const SignupInput = styled.input.attrs({ type: "text" })`
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;

  margin-bottom: 25px;
`;

const SignupPass = styled.input.attrs({ type: "password" })`
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;

  margin-bottom: 25px;
`;

export { SignupStyle, SignupForm, SignupTitle, SignupInput, SignupPass };
