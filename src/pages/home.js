import React, { useRef } from "react";
import {
  HomeStyle,
  TitleStyle,
  AboutStyle,
  FaqStyle,
  ContactStyle,
  ListItems,
  HomeBackground,
  HomeRegister,
} from "../styles/home.style";
import { useNavigate } from "react-router-dom";
import textData from "../resources/text.json";
import NavBar from "../navbar";
import background from "../resources/Gym-Background.jpeg";
import Button from "@mui/material/Button/";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "FitBud_Gmail",
        "template_ouwwfff",
        form.current,
        "3x870QioZ6wndTtEJ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
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

              <ContactStyle id="contact" ref={form} onSubmit={sendEmail}>
                <Box>
                  <div id="email">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <TextField
                        required
                        id="outlined-email"
                        type="text"
                        label="Email"
                      />
                    </FormControl>
                  </div>
                  <div id="subject">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <TextField
                        required
                        id="outlined-subject"
                        type="text"
                        label="Subject"
                      />
                    </FormControl>
                  </div>
                  <div id="message">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                      />
                    </FormControl>
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    style={{ width: "90px" }}
                  >
                    Send
                  </Button>
                </Box>
              </ContactStyle>
            </>
          );
        })}
      </HomeStyle>
    </>
  );
};

export default Home;
