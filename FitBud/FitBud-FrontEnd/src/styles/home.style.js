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
  margin-top: 60.5px;
`;

const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutStyle = styled.div`
  display: flex;
  height: 100vh;
  
`;

const ContactStyle = styled.div`
  height: 100vh;
`;

const FaqStyle = styled.div`
  height: 100vh;
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