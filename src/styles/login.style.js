import styled from "styled-components";

const LoginStyle = styled.div`
  background-color: #101425;
  color: white;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  color: #101525;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  margin-left: 28%;
  margin-right: 30%;
  background-color: #D9D9D9;
  padding: 2rem;
  min-width: 40vw;
`;

const LoginTitle = styled.div`
  font-family: Mattone;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LoginPass = styled.input.attrs({ type: "password" })`
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;
  margin-bottom: 25px;
`;

const LoginEmail = styled.input.attrs({ type: "text" })`
  height: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin: 5px;
  margin-left: 33px;
`;

const LoginSign = styled.div`
  justify-content: center;
  align-items: center;
`;

const LoginSignup = styled.div`
  font-size: 13px;
`;

const LoginGoogle = styled.div`
  width: 180px;
`;
export {
  LoginStyle,
  LoginForm,
  LoginTitle,
  LoginEmail,
  LoginPass,
  LoginSign,
  LoginSignup,
  LoginGoogle,
};
