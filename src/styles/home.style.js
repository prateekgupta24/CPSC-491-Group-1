import styled from "styled-components";
//import url("https://fonts.googleapis.com/css?family=Bodoni+Moda:700|Outfit:400,700");

const HomeStyle = styled.div`
  background-color: #101425;
  font-family: Verdana;
  border: 1px none;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;
  height: 100vh;
  margin: 0;
  scroll-margin-top: 60.5px;
`;

const TitleStyle = styled.div`
  display: flex;
  font-family: Mattone;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  scroll-margin-top: 60.5px;
`;

const AboutStyle = styled.div`
  background-color: #101425;  
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
  white-space: pre-line;
  flex-direction: column;
  padding-top: 5vh;
  padding-left: 10vh;
  padding-right: 10vh;
  scroll-margin-top: 60.5px;
`;

const ContactStyle = styled.form`
  background-color: #101425;
  min-height: 100vh;
  padding-top: 5vh;
  padding-left: 10vh;
  scroll-margin-top: 60.5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const FaqStyle = styled.div`
  background-color: #101425;
  min-height: 50vh;
  padding-top: 5vh;
  padding-left: 10vh;
  padding-right: 10vh;
  scroll-margin-top: 60.5px;
`;

const HomeEmail = styled.input.attrs({ type: "text" })`
  color: white;
  height: 25px;
  width: 20vw;
`;

const HomeSubject = styled.input.attrs({ type: "text" })`
  color: white;
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
  height: 625px;
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
