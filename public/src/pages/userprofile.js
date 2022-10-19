import React, { useState, useEffect } from "react";
import {
  Profile,
  ProfileTitle,
  ProfileForm,
  ProfileSection,
  ProfileInput,
  ProfileSelect,
} from "../styles/userprofile.style";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button/";
import axios from "axios";

const UserProfile = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  function HandleProfileForm(event) {
    event.preventDefault();
    console.log(event);
    useEffect(() => {
      axios
        .post("http://http://localhost:8000/users/create_user_user__post", {
          body: JSON.stringify("test"),
        })
        .then((response) => {
          setPost(response.data);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
    });
  }

  return (
    <Profile>
      <IconButton
        onClick={() => {
          navigate(-1);
        }}
        color="primary"
        aria-label="back"
        component="label"
        style={{ justifyContent: "flex-start" }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <ProfileForm id="Form" onSubmit={HandleProfileForm}>
        <ProfileTitle id="Title">User Profile</ProfileTitle>
        <ProfileSection id="First-Name">
          <label>First Name</label>
          <ProfileInput />
        </ProfileSection>

        <ProfileSection id="Last-Name">
          <label>Last Name</label> <ProfileInput />
        </ProfileSection>

        <ProfileSection id="Age">
          <label>Age</label>
          <ProfileInput />
        </ProfileSection>

        <ProfileSection id="Gender">
          <label>Gender</label>
          <ProfileSelect>
            <option value="" />
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </ProfileSelect>
        </ProfileSection>

        <ProfileSection id="Height">
          <div className="Height-Foot">
            <label>Height</label>
            <ProfileSelect>
              <option value="" />
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </ProfileSelect>
            <label>ft</label>
          </div>
          <div className="Height-Inches">
            <ProfileSelect>
              <option value="" />
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
            </ProfileSelect>
            <label>in</label>
          </div>
        </ProfileSection>

        <ProfileSection id="Weight">
          <label>Weight</label>
          <ProfileInput />
          <ProfileSelect>
            <option value="" />
            <option value="1">lbs</option>
            <option value="2">kgs</option>
          </ProfileSelect>
        </ProfileSection>

        <ProfileSection id="City">
          <label>City</label>
          <ProfileInput />
        </ProfileSection>

        <ProfileSection id="Gym">
          <label>Gym</label> <ProfileInput />
        </ProfileSection>
        <Button variant="contained">Save</Button>
      </ProfileForm>
    </Profile>
  );
};

export default UserProfile;
