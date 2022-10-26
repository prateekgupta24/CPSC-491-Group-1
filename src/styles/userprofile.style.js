import styled from "styled-components";

const Profile = styled.div`
  background-color: #282c34;
`;

const ProfileForm = styled.form``;

const ProfileTitle = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
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
