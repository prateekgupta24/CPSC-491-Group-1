import styled from "styled-components";

const Profile = styled.div`
  background-color: #101425;
  min-height: 100vh;
`;

const ProfileForm = styled.form`
  margin-left: 35vw;
`;

const ProfileTitle = styled.div`
  font-size: 40px;
  font-family: Mattone;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 130px;
`;

const ProfileSection = styled.div`
  margin-bottom: 5px;
  display: flex;
`;
const ProfileInput = styled.input.attrs({ type: "text" })`
  margin-left: 5px;
`;
const ProfileSelect = styled.select`
  margin-left: 5px;
`;

export {
  Profile,
  ProfileForm,
  ProfileTitle,
  ProfileSection,
  ProfileInput,
  ProfileSelect,
};
