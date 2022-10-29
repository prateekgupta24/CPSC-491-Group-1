import styled from "styled-components";

const Preferences = styled.div`
  background-color: #282c34;
  color: white;
  height: 100vh;
`;

const PreferencesForm = styled.div`
  background-color: whitesmoke;
  color: black;
  align-items: left;
  padding: 2rem;
  margin-left: 35vw;
  width: 25vw;
`;

const PreferencesTitle = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;

const PreferencesSection = styled.div`
  margin-bottom: 5px;
  display: flex;
`;
const PreferencesInput = styled.input.attrs({ type: "text" })`
  margin-left: 5px;
`;
const PreferencesSelect = styled.select`
  margin-left: 5px;
`;

export {
  Preferences,
  PreferencesForm,
  PreferencesTitle,
  PreferencesSection,
  PreferencesInput,
  PreferencesSelect,
};
