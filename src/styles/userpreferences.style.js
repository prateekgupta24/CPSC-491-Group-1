import styled from "styled-components";
 
const Preferences = styled.div`
 background-color: #101425;
 min-height: 100vh;
`;
 
const PreferencesForm = styled.div`
 color: white;
 margin-left: 35vw;
`;
 
const PreferencesTitle = styled.div`
 font-size: 40px;
 font-family: Mattone;
 font-weight: bold;
 justify-content: center;
 margin-bottom: 20px;
 margin-left: 100px;
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
