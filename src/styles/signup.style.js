import styled from "styled-components";

const SignupStyle = styled.div`
  background-color: #101425;
  color: white;
  height: 100vh;
`;

const SignupForm = styled.form`
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
  background-color: #D9D9D9;
  padding: 2rem;
  min-width: 40vw;
`;

const SignupTitle = styled.div`
  color: #101425;
  font-family: Mattone;
  font-size: 40px;
  margin-bottom: 20px;
`;

export { SignupStyle, SignupForm, SignupTitle };
