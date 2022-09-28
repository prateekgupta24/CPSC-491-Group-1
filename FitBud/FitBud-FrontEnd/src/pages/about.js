import React from 'react';
import AboutStyle from '../styles/about.style.js';

const About = () => {
  return (
    <AboutStyle>
      <div>
        <h1>About Us</h1> 
        <body>
          Austin Sohn Bio:
        </body>
        <body>
        I’ve taken C++, Python, and Java classes.  I’ve learned a bit of Node.js on my own time and am fairly new to HTTP/CSS. I’ve also taken a Web Back-End class at CSUF.
        </body>
        <ul>
          Project experience:
          <li>Back-end for a twitter clone.</li>
          <ul class="square">
            <li>Create new posts synchronously and asynchronously.</li>
            <li>Create polls</li>
            <li>Like posts</li>
            <li>Like posts</li>
            <li>Show the timeline</li>
          </ul>
          <li>Created a GUI for the game called Nim that can play with an AI that was provided by the teacher.</li>
          <li> A twitch chat bot</li>
            <ul class="square">
              <li>Changes the game in the description</li>
              <li>Changes the title of the stream</li>
              <li>Roll a dice</li>
              <li>Add additional basic text commands through a database</li>
            </ul>
        </ul>
        <body>Prateek Gupta Bio</body>
        <body> Background: </body>
        <body>I have experience with C++,  Python, SQL. I have a solid foundation in building  databases and using SQL queries to retrieve data. I have a little experience with Angular JS.</body>
        <ul>
        Project experience:
          <li>Built a social network for computer science professionals and students</li>
          <ul class="square">
            <li>User or employers would create accounts based on either their experiences/ skills or the company they work for</li>
            <li>Users can search for specific companies</li>
            <li>Employers could search by skills</li>
          </ul>
          <li>Built a cloud storage application  accessible via an internet browser.</li>
            <ul class="square">
              <li>User could upload files or images to a cloud storage supported by AWS S3</li>
              <li>User could log back in and retrieve the file.</li>
            </ul>
        </ul>
        <body>Jose Arce Bio</body>
        <body>Background:</body>
        <body>The programming languages I am skilled in are C++, Python, and Java. I have learned HTML, CSS, and JS with the knowledge of frontend and a bit of backend. I’ve had little experience of retrieving data and creating a database.</body>
        <ul>
          Project experience:
          <li>Created a website that gives the updated numbers of COVID cases since March 2020.</li>
          <li>Created an app that converts currency that is necessary for the user.</li>
          <li>Created a Space Invaders inspired video game with different weapons and color changing spaceships.</li>
        </ul>
      </div>
    </AboutStyle>
    
  );
}

export default About;