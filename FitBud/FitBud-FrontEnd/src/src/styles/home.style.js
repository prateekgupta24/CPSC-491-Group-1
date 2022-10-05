import styled from 'styled-components';

const HomeStyle = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;
  min-height: 100vh;
  padding: 5vh;
  margin: 0;
`;

const TitleStyle = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutStyle = styled.div`
  white-space: pre-line;
  vertical-align: bottom;
`;

const ContactStyle = styled.div`

`;

const FaqStyle = styled.div`

`;

const ListItems = styled.li`

`;

export {
  HomeStyle,
  TitleStyle,
  AboutStyle,
  ContactStyle,
  FaqStyle,
  ListItems,
};