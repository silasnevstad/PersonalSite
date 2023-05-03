import React from 'react';
import NavigationMenu from './NavigationMenu';
import NavigationHeader from './NavigationHeader';
import StickyHeader from './StickyHeader';
import '../styles/Resume.css'
import SocialLinks from './SocialLinks';
import styled from 'styled-components';

const ResumeContainer = styled.div`
  margin-top: 6em;
  width: ${({ isMenuOpen }) => isMenuOpen ? 'calc(85%)' : '100%'};
  transition: margin-left 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-top: 3em;
  }
`;

const Line = styled.hr`
  border: .5px solid #4d4d4d;
  width: 98.8%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkillsSection = styled.div`
  margin: 10px 10px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 7%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 170px;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 8em;
  margin-top: 8px;
  font-size: 1em;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 0.9em;
  }
`;

const SkillProgress = styled.progress`
  width: 100%;
  height: 10px;
  border-radius: 5px;
  margin-top: 5px;
  -webkit-appearance: none;
  appearance: none;
  &::-webkit-progress-bar {
    border-radius: 30px;
  }

  &::-webkit-progress-value {
      border-radius: 30px;
      background: linear-gradient(to right, #5C86FF, #5C86FF);
  }
`;


const Resume = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="Resume">
      <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavigationHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ResumeContainer isMenuOpen={isMenuOpen}>
        <div class="sticky-div">
          <h1>Silas Nevstad</h1>
          <h2 className="headerH2"> Boston, MA | nevstads@gmail.com | <a href="https://www.linkedin.com/in/silas-nevstad-3091a420b/">LinkedIn</a> | <a href="https://github.com/silasnevstad/">Github</a> </h2>
          <StickyHeader isMenuOpen={isMenuOpen} />
        </div>

        <div className="scrollable-div">
          <div className="section">
            <h2>Education</h2>
            <Line />
            <ul>
              <li><span className="school-name">Candidate for Bachelors in Computer Science</span>, <span className="school-location">2021-Present</span></li>
              <li>Northeastern University, <span className="school-name">Khoury College of Computer Sciences</span>, Boston, MA </li>
              <li>Relevant Coursework: Algorithms and Data, Computer Systems, Object-Orientated Design, Electrical Engineering and Design, Fundamentals of Computer Science 1 & 2, Fundamentals of Cybersecurity, Programming in C++, Data Models</li>
              <br />
              <li><span className="school-name">High School Diploma</span>, <span className="school-location">2017-2021</span></li>
              <li>Staples High School, Westport, CT</li>
              <li>GPA: 3.8</li>
              <li>Relevant Coursework: AP Computer Science, Web Applications, Applied Algorithmic Design, Mobile App Development</li>
              <li>Activities: Varsity Ice Hockey, Varsity Track</li>
              <br />
              <li><span className="school-name">Bedford Middle School</span>, <span className="school-year">Westport, CT</span>, <span className="school-location">2016-2017</span></li>
              <li><span className="school-name">Kingston Grammar School</span>, <span className="school-year">Kingston, England</span>, <span className="school-location">2014-2016</span></li>
              <li><span className="school-name">Hall School Wimbledon</span>, <span className="school-year">London, England</span>, <span className="school-location">2007-2014</span></li>
              <br />
              <li><span className="school-name">Bedford Middle School</span>, <span className="school-location">2017-2018</span></li>
              <li> Westport, CT </li>
              <li>GPA: 3.78</li>
              <li>Activities: Club Soccer</li>
              <br />
              <li><span className="school-name">Kingston Grammar School</span>, <span className="school-location">2015-2017</span></li>
              <li> Kingston, London </li>
              <li>A* German GCSE (2015), LAMBDA Certifications (2012-2016)</li>
              <li>Activities: Field Hockey</li>
            </ul>
          </div>

          <br />


          <div className="section">
            <h2>Skills</h2>
            <Line />
            <SkillsSection>
              <Skill className="skills-inline">Python<SkillProgress value="85" max="100"></SkillProgress> </Skill> 
              <Skill className="skills-inline">React<SkillProgress value="80" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Java<SkillProgress value="68" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Javascript<SkillProgress value="68" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Swift<SkillProgress value="80" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">NodeJS<SkillProgress value="70" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">HTML<SkillProgress value="75" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">CSS<SkillProgress value="78" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">C++<SkillProgress value="66" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Dart<SkillProgress value="45" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Git<SkillProgress value="75" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">MongoDB<SkillProgress value="60" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">MacOS<SkillProgress value="90" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Windows<SkillProgress value="80" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Linux<SkillProgress value="60" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">MIPS Assembly<SkillProgress value="45" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">German<SkillProgress value="96" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Norwegian<SkillProgress value="96" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">English<SkillProgress value="100" max="100"></SkillProgress> </Skill>


            </SkillsSection>
            {/* <ul> */}
              {/* <li className="skills-inline">Git</li>  <progress value="75" max="100" className="python"></progress> <br />
              <li className="skills-inline">MongoDB</li>  <progress value="65" max="100" className="python"></progress> <br />
              <li className="skills-inline">MacOS</li>  <progress value="90" max="100" className="python"></progress> <br />
              <li className="skills-inline">Windows</li>  <progress value="85" max="100" className="python"></progress> <br />
              <li className="skills-inline">Linux</li>  <progress value="70" max="100" className="python"></progress> <br />
              <li className="skills-inline">MIPS Assembly</li>  <progress value="45" max="100" className="python"></progress> <br />
              <li className="skills-inline">German</li>  <progress value="47" max="50" className="python"></progress> <br />
              <li className="skills-inline">Norwegian</li>  <progress value="47" max="50" className="python"></progress> <br />
              <li className="skills-inline">English</li>  <progress value="50" max="50" className="python"></progress> <br /> */}
            {/* </ul> */}
          </div>

          <br />

          <div className="section">
            <h2>Work Experience</h2>
            <Line />
            <ul>
              <li className="biggerLi">Tech Intern</li>
              <li className="specialLi">The Bites Company, Bridgeport, CT </li>
              <ul>
                <li  className="bulletPoint">Managed social media accounts, resulting in a 25% increase in followers and a 15% increase in engagement</li>
                <li  className="bulletPoint">Created and maintained a comprehensive customer information database, resulting in a 15% increase in
                  marketing and sales efficiency</li>
              </ul>
              
            </ul>
          </div>

          <br />

          <div className="section">
            <h2>Projects</h2>
            <Line />
            <ul>
              <li className="biggerLi">AlgoPicks, Personal <span className="project-language">| Swift | Python</span></li>
              <ul>
                <li className="bulletPoint">Designed a machine learning algorithm in Python to predict sports game outcomes</li>
                <li className="bulletPoint">Developed an app in Swift to allow users to track sports bets and make more informed decisions using algorithm-based predictions, improving customer winnings by 10%</li>
                <li className="bulletPoint">Utilized and configured the Firebase real-time database to store and retrieve over 5,000 data points</li>
              </ul>
              <br />
              <li className="biggerLi">AlgoTrader, Personal <span className="project-language">| Python</span></li>
              <ul>
                <li className="bulletPoint">Designed and deployed a machine learning algorithm for automated stock trading on a paper trading account using Python and the Alpaca trading API. Generated an $18k profit from a $100k initial investment during a period where the SPY decreased by 6Á</li>
                <li className="bulletPoint">Utilized data from the NYSE indices to screen for potential trades and make predictions for buying and selling</li>
                <li className="bulletPoint">Continuously monitored and optimized algorithm performance to maximize profitability</li>
              </ul>
              <br />
              <li className="biggerLi">ChessClock, Personal <span className="project-language">| Swift </span></li>
              <ul>
                <li className="bulletPoint">Developed a chess timer app in Swift in under 12 hours, allowing users to play time-controlled chess over-the-boarT</li>
                <li className="bulletPoint">Implemented a clean, modern design that fits seamlessly with the latest iOS design guidelines, resulting in a visually appealing and professional-looking app</li>
              </ul>
              <br />
              <li className="biggerLi">VS Code GPT, Personal <span className="project-language">| Javascript</span></li>
              <ul>
                <li className="bulletPoint">Developed a VS Code extension that leverages the power of OpenAI's Chat GPT to help explain and debug code, making the process more efficient and effectiv¢</li>
                <li className="bulletPoint">Integrated the extension with VS Code, allowing users to easily access its features and enhance their coding experience</li>
              </ul>
              
            </ul>
          </div>
      
          <br />

          <div className="section">
            <h2>Additional Information</h2>
            <Line />
            <ul>
              <li className="bulletPoint"> Related Experience: 2nd Place High School Hackathon Winner (2019) </li>
              <li className="bulletPoint"> Interests: Chess, Music Production, Playing Piano, Hockey </li>
            </ul>
          </div>

        </div>

        <div style={{height: "10vh"}}></div>
      </ResumeContainer>

      <SocialLinks />
    </div>
  );
};

export default Resume;
