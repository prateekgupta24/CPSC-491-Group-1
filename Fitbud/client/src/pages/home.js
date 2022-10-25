import React from "react";
import {
  HomeStyle,
  TitleStyle,
  AboutStyle,
  FaqStyle,
  ContactStyle,
  HomeEmail,
  HomeSubject,
  HomeInput,
  ListItems,
  HomeBackground,
  HomeRegister,
} from "../styles/home.style";
import { useNavigate } from "react-router-dom";
import textData from "../resources/text.json";
import NavBar from "../navbar";
import Login from "./login.js";
import background from "../resources/Gym-Background.jpeg";
import Button from "@mui/material/Button/";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  const navigate = useNavigate();
  function handleContact(event) {
    event.preventDefault();
    console.log("send email");
  }
  return (
    <>
      <NavBar className="NavBar" />
      <HomeStyle id="home">
        <TitleStyle className="title">
          <h1>Welcome to FitBud</h1>
          <div>
            <HomeBackground
              className="background-image"
              src={background}
              alt="gym-background"
            />
            <HomeRegister>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
                variant="outlined"
                style={{
                  padding: "0px",
                  marginLeft: "5px",
                  zIndex: "1",
                }}
              >
                Create account
              </Button>
            </HomeRegister>
          </div>
        </TitleStyle>

        <div>{Login.setUser}</div>
        {textData.map((data) => {
          return (
            <>
              <AboutStyle id="about">
                <h1>{data.about.title}</h1>

                <h2>{data.about.description}</h2>
                <text>{data.about.intro.austin}</text>
                <ul>
                  {data.about.bullet.austin.map((bullets) => {
                    return <ListItems>{bullets}</ListItems>;
                  })}
                </ul>
                <text>{data.about.intro.prateek}</text>
                <ul>
                  {data.about.bullet.prateek.map((bullets) => {
                    return <ListItems>{bullets}</ListItems>;
                  })}
                </ul>
                <text>{data.about.intro.jose}</text>
                <ul>
                  {data.about.bullet.jose.map((bullets) => {
                    return <ListItems>{bullets}</ListItems>;
                  })}
                </ul>
              </AboutStyle>

              <FaqStyle id="faq">
                <h1>{data.faq.title}</h1>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{data.faq.id.q1.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.faq.id.q1.a}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{data.faq.id.q2.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.faq.id.q2.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              </FaqStyle>

              <ContactStyle id="contact" onSubmit={handleContact}>
                <h1>Contact Us</h1>
                Email: <HomeEmail />
                Subject: <HomeSubject />
                Message: <HomeInput />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  style={{ width: "90px" }}
                >
                  Send
                </Button>
              </ContactStyle>
            </>
          );
        })}
      </HomeStyle>
    </>
  );
};

export default Home;
