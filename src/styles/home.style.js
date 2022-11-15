import styled from "styled-components";

const HomeStyle = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: black;
  height: 100vh;
  max-width: 100vw;
  padding: 5vh;
  margin: 0;
  scroll-margin-top: 60.5px;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  scroll-margin-top: 60.5px;
`;

const AboutStyle = styled.div`
  display: flex;
  min-height: 100vh;
  white-space: pre-line;
  flex-direction: column;
  scroll-margin-top: 60.5px;
`;

const ContactStyle = styled.form`
  min-height: 100vh;
  scroll-margin-top: 60.5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const FaqStyle = styled.div`
  min-height: 100vh;
  scroll-margin-top: 60.5px;
`;

const HomeEmail = styled.input.attrs({ type: "text" })`
  height: 25px;
  width: 20vw;
`;

const HomeSubject = styled.input.attrs({ type: "text" })`
  height: 25px;
  width: 20vw;
`;

const HomeInput = styled.textarea.attrs({ type: "text" })`
  min-height: 25vh;
  min-width: 80vw;
  max-height: 25vh;
  max-width: 80vw;
`;

const HomeSend = styled.input.attrs({ type: "submit", value: "Send" })`
  margin-top: 5x;
  cursor: pointer;
  font-size: 25px;
  background: black;
  border: 1px solid black;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 5px;
  width: 181px;
`;
const ListItems = styled.li``;

const HomeBackground = styled.img`
  background-size: cover;
  object-fit: cover;
  width: 100vw;
  height: 585px;
`;

export {
  HomeStyle,
  TitleStyle,
  AboutStyle,
  ContactStyle,
  FaqStyle,
  HomeEmail,
  HomeSubject,
  HomeInput,
  HomeSend,
  ListItems,
  HomeBackground,
};
