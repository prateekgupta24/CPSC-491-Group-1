import styled from "styled-components";

const LoginStyle = styled.div`
  background-color: #282c34;
  color: white;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  color: black;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
  background-color: whitesmoke;
  padding: 2rem;
  min-width: 40vw;
`;

const LoginTitle = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const LoginSignout = styled.button`
  cursor: pointer;
  font-size: 25px;
  background: #01a7d0;
  border: 1px solid #01a7d0;
  color: #fff;
  margin-right: 5px;
  margin-bottom: 7px;
  width: 181px;
  padding-bottom: 5px;
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
  margin-top: -20px;
`;

const LoginGoogle = styled.div`
  width: 180px;
`;
export {
  LoginStyle,
  LoginForm,
  LoginTitle,
  LoginSignout,
  LoginEmail,
  LoginPass,
  LoginSign,
  LoginSignup,
  LoginGoogle,
};
