import React, { useState, useEffect } from "react";
import {
  Preferences,
  PreferencesTitle,
  PreferencesForm,
  PreferencesSection,
  PreferencesInput,
  PreferencesSelect,
} from "../styles/userpreferences.style";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button/";
import axios from "axios";

const UserPreferences = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      city: event.target.city.value,
      workoutstyle: event.target.lname.value,
      age: event.target.age.value,
      gender: event.target.gender.value,
      height: event.target.heightft.value + "'" + event.target.heightin.value + '"',
      weight: event.target.weight.value,
      distance: event.target.distance.value,
      gym: event.target.gym.value,
    };
    axios
      .put("http://localhost:8080/preferences", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
    navigate(-1);
  };
  

  return (
    <Preferences>
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

      <PreferencesForm id="Form" onSubmit={handleSubmit}>
        <PreferencesTitle id="Title">User Preferences</PreferencesTitle>
        <PreferencesSection id="My-City">
          <label>My City</label>
          <PreferencesInput />
        </PreferencesSection>

        <PreferencesSection id="Workout-Style">
          <label>Workout Style</label> <PreferencesInput />
        </PreferencesSection>

        <PreferencesSection id="Age">
          <label>Age Range</label>
          <PreferencesInput />
        </PreferencesSection>

        <PreferencesSection id="Gender">
          <label>Interested in</label>
          <PreferencesSelect>
            <option value="" />
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
          </PreferencesSelect>
        </PreferencesSection>

        <PreferencesSection id="Height">
          <div className="Height-Foot">
            <label>Height</label>
            <PreferencesSelect>
              <option value="" />
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </PreferencesSelect>
            <label>ft</label>
          </div>
          <div className="Height-Inches">
            <PreferencesSelect>
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
            </PreferencesSelect>
            <label>in</label>
          </div>
        </PreferencesSection>

        <PreferencesSection id="Weight">
          <label>Weight</label>
          <PreferencesInput />
          <PreferencesSelect>
            <option value="" />
            <option value="1">lbs</option>
            <option value="2">kgs</option>
          </PreferencesSelect>
        </PreferencesSection>

        <PreferencesSection id="Distance">
          <label>Distance</label>
          <PreferencesInput />
          <PreferencesSelect>
            <option value="" />
            <option value="1">miles</option>
            <option value="2">kilometers</option>
          </PreferencesSelect>
        </PreferencesSection>

        <PreferencesSection id="Gym">
          <label>Gym</label> <PreferencesInput />
        </PreferencesSection>
        <Button variant="contained">Save</Button>
      </PreferencesForm>
    </Preferences>
  );
};

export default UserPreferences;
