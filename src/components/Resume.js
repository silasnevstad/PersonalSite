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
              <li><span className="school-name">Northeastern University</span>, Khoury College of Computer Sciences <span className="school-year">2021-Present</span></li>
              <li>Candidate for Bachelors in Computer Science<span className="school-location">Boston, MA</span></li>
              <li className="bulletPoint-indent">Relevant Coursework: Algorithms and Data, Computer Systems, Object-Orientated Design, Electrical Engineering and Design, Fundamentals of Computer Science 1 & 2, Fundamentals of Cybersecurity, Programming in C++, Data Models</li>
              <br />
              <li><span className="school-name">Staples High School</span>, <span className="school-year">2017-2021</span></li>
              <li>High School Diploma<span className="school-location">Westport, CT</span></li>
              <li className="bulletPoint-indent">Relevant Coursework: AP Computer Science (5/5), Web Applications, Applied Algorithmic Design, Mobile App Development</li>
              <li className="bulletPoint-indent">GPA: 3.8</li>
              <li className="bulletPoint-indent"> Activities: Varsity Ice Hockey, Varsity Track</li>
              <br />
              <li><span className="school-name">Bedford Middle School</span>, <span className="school-year">2017-2018</span></li>
              <li><span className="school-location">Westport, CT</span></li>
              <li className="bulletPoint-indent">GPA: 3.78</li>
              <li className="bulletPoint-indent">Activities: Club Soccer</li>
              <br />
              <li><span className="school-name">Kingston Grammar School</span>, <span className="school-year">2015-2017</span></li>
              <li><span className="school-location">Kingston, London</span></li>
              <li className="bulletPoint-indent">A* German GCSE (2015), LAMBDA Certifications (2012-2016)</li>
              <li className="bulletPoint-indent">Activities: Field Hockey</li>
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
              <li className="biggerLi">BuddyAI, Personal <span className="project-language">| React | Python</span></li>
              <ul>
                <li className="bulletPoint">Conceived and launched BuddyAI, an AI co-writing tool, processing over 34,000 requests and offering a secure public API for broader accessibility and utilization</li>
                <li className="bulletPoint">Designed a user-friendly React front-end hosted on AWS, providing a seamless and efficient user experience</li>
                <li className="bulletPoint">Integrated Firebase Authentication and Firestore to secure user login, data storage, and manage personal information, text documents, and API keys</li>
              </ul>
              <br />
              <li className="biggerLi">Senttrac, Personal <span className="project-language">| React | Python</span></li>
              <ul>
                <li className="bulletPoint">Developed Senttrac, a real-time sentiment tracker, proficiently handling over 15,000 user requests on senttrac.com</li>
                <li className="bulletPoint">Built a robust Python API server to manage high-volume sentiment analysis requests efficiently and reliably</li>
                <li className="bulletPoint">Created a user-centric React web application, offering sentiment analysis insights to a large user base on senttrac.com</li>
              </ul>
              <br />
              <li className="biggerLi">AlgoTrader, Personal <span className="project-language">| Python</span></li>
              <ul>
                <li className="bulletPoint">Devised and deployed a machine learning-powered algorithm for automated stock trading, generating an 18% profit against a 6% decrease in SPY, showcasing resilience and profitability</li>
                <li className="bulletPoint">Incorporated data from NYSE indices for comprehensive trade screening and predictive buying/selling, optimizing investment decisions</li>
              </ul>
              <br />
              <li className="biggerLi">VS Code GPT, Personal <span className="project-language">| Javascript</span></li>
              <ul>
                <li className="bulletPoint">Developed a VS Code extension leveraging OpenAI's ChatGPT to enhance code explanation and debugging</li>
                <li className="bulletPoint">Achieved seamless integration within the VS Code environment, facilitating the extension's accessibility and augmenting coding experiences for over 46,000 users</li>
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
              <li className="bulletPoint"> Languages: English (Fluent), German (Fluent), Norwegian (Fluent) </li>
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
