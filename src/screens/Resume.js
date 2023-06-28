import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import NavigationHeader from '../components/NavigationHeader';
import StickyHeader from '../components/StickyHeader';
import '../styles/Resume.css'
import SocialLinks from '../components/SocialLinks';
import styled, { keyframes } from 'styled-components';

const fadeAndDropInFromCeiling = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const ResumeContainer = styled.div`
  width: 95%;
  transition: margin-left 0.3s ease-in-out;
  margin: 2em;
  margin-top: 6em;
  position: relative;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    margin-top: 3em;
  }
`;

const ResumeSubHeader = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 500;
  margin-left: 10px;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
`;

const ResumeSection = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
`;

const ResumeListItem = styled.li`
  font-family: 'Inter', sans-serif;
  list-style: none;
  font-size: 18px;
  line-height: 1.3;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
`;

const ResumeListItemBigger = styled.li`
  font-family: 'Inter', sans-serif;
  list-style: none;
  font-size: 18px;
  line-height: 1.3;
  font-weight: bold;
  margin-bottom: 5px;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
`;

const ResumeListItemBullet = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  list-style: circle;
  max-width: 80%;
  margin-top: 5px;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
`;

const ResumeListItemIndent = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 1.3;
  list-style: circle;
  margin-left: 20px;
  margin-top: 2px;
  max-width: 80%;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
`;

const ResumeListItemSpecial = styled.li`
  font-family: 'Inter', sans-serif;
  list-style: none;
  line-height: 1.3;
  font-size: 15px;
  margin-bottom: 5px;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;
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
  justify-items: center;
  align-items: center;
  animation: ${fadeAndDropInFromCeiling} 0.3s ease-in-out forwards;
  opacity: 0;

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
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    width: 75%;
    font-size: 1em;
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
      <NavigationHeader currentPage={"/resume"} toggleMenu={toggleMenu} />
      <ResumeContainer isMenuOpen={isMenuOpen}>
        <div class="sticky-div">
          <h1>Silas Nevstad</h1>
          <ResumeSubHeader> Boston, MA | nevstads@gmail.com | <a href="https://www.linkedin.com/in/silas-nevstad-3091a420b/">LinkedIn</a> | <a href="https://github.com/silasnevstad/">Github</a> </ResumeSubHeader>
          <StickyHeader isMenuOpen={isMenuOpen} />
        </div>

        <div className="scrollable-div">
          <ResumeSection style={{animationDelay: '0.1s'}}>
            <ResumeSubHeader>Education</ResumeSubHeader>
            <Line />
            <ul>
              <ResumeListItem style={{animationDelay: '0.11s'}}><span className="school-name">Northeastern University</span>, Khoury College of Computer Sciences <span className="school-year">2021-Present</span></ResumeListItem>
              <ResumeListItem style={{animationDelay: '0.12s'}}>Candidate for Bachelors in Computer Science<span className="school-location">Boston, MA</span></ResumeListItem>
              <ResumeListItemIndent style={{animationDelay: '0.13s'}}>Relevant Coursework: Algorithms and Data, Computer Systems, Object-Orientated Design, Electrical Engineering and Design, Fundamentals of Computer Science 1 & 2, Fundamentals of Cybersecurity, Programming in C++, Data Models</ResumeListItemIndent>
              <br />
              <ResumeListItem style={{animationDelay: '0.14s'}}><span className="school-name">Staples High School</span>, <span className="school-year">2017-2021</span></ResumeListItem>
              <ResumeListItem style={{animationDelay: '0.15s'}}>High School Diploma<span className="school-location">Westport, CT</span></ResumeListItem>
              <ResumeListItemIndent style={{animationDelay: '0.16s'}}>Relevant Coursework: AP Computer Science (5/5), Web Applications, Applied Algorithmic Design, Mobile App Development</ResumeListItemIndent>
              <ResumeListItemIndent style={{animationDelay: '0.17s'}}>GPA: 3.8</ResumeListItemIndent>
              <ResumeListItemIndent style={{animationDelay: '0.18s'}}> Activities: Varsity Ice Hockey, Varsity Track</ResumeListItemIndent>
              <br />
              <ResumeListItem style={{animationDelay: '0.19s'}}><span className="school-name">Bedford Middle School</span>, <span className="school-year">2017-2018</span></ResumeListItem>
              <ResumeListItem style={{animationDelay: '0.2s'}}><span className="school-location">Westport, CT</span></ResumeListItem>
              <ResumeListItemIndent style={{animationDelay: '0.21s'}}>GPA: 3.78</ResumeListItemIndent>
              <ResumeListItemIndent style={{animationDelay: '0.22s'}}>Activities: Club Soccer</ResumeListItemIndent>
              <br />
              <ResumeListItem style={{animationDelay: '0.23s'}}><span className="school-name">Kingston Grammar School</span>, <span className="school-year">2015-2017</span></ResumeListItem>
              <ResumeListItem style={{animationDelay: '0.24s'}}><span className="school-location">Kingston, London</span></ResumeListItem>
              <ResumeListItemIndent style={{animationDelay: '0.25s'}}>A* German GCSE (2015), LAMBDA Certifications (2012-2016)</ResumeListItemIndent>
              <ResumeListItemIndent style={{animationDelay: '0.26s'}}>Activities: Field Hockey</ResumeListItemIndent>
            </ul>
          </ResumeSection>

          <br />


          <ResumeSection style={{animationDelay: '0.3s'}}>
            <ResumeSubHeader>Skills</ResumeSubHeader>
            <Line />
            <SkillsSection>
              <Skill className="skills-inline">Python<SkillProgress value="85" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Javascript<SkillProgress value="68" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">NodeJS<SkillProgress value="70" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">C++<SkillProgress value="66" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">React<SkillProgress value="80" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Swift<SkillProgress value="80" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Java<SkillProgress value="68" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">HTML<SkillProgress value="75" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">CSS<SkillProgress value="78" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Dart<SkillProgress value="45" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Git<SkillProgress value="75" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">MongoDB<SkillProgress value="60" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">MacOS<SkillProgress value="90" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Windows<SkillProgress value="80" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Linux<SkillProgress value="60" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Assembly<SkillProgress value="45" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">German<SkillProgress value="96" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">Norwegian<SkillProgress value="96" max="100"></SkillProgress> </Skill>
              <Skill className="skills-inline">English<SkillProgress value="100" max="100"></SkillProgress> </Skill>


            </SkillsSection>
          </ResumeSection>

          <br />

          <ResumeSection style={{animationDelay: '0.4s'}}>
            <ResumeSubHeader>Work Experience</ResumeSubHeader>
            <Line />
            <ul>
              <ResumeListItemBigger>Tech Intern</ResumeListItemBigger>
              <ResumeListItemSpecial>The Bites Company, Bridgeport, CT </ResumeListItemSpecial>
              <ul>
                <ResumeListItemBullet>Managed social media accounts, resulting in a 25% increase in followers and a 15% increase in engagement</ResumeListItemBullet>
                <ResumeListItemBullet>Created and maintained a comprehensive customer information database, resulting in a 15% increase in
                  marketing and sales efficiency</ResumeListItemBullet>
              </ul>
              
            </ul>
          </ResumeSection>

          <br />

          <ResumeSection style={{animationDelay: '0.5s'}}>
            <ResumeSubHeader>Projects</ResumeSubHeader>
            <Line />
            <ul>
              <ResumeListItemBigger>BuddyAI, Personal <span className="project-language">| React | Python</span></ResumeListItemBigger>
              <ul>
                <ResumeListItemBullet>Conceived and launched BuddyAI, an AI co-writing tool, processing over 34,000 requests and offering a secure public API for broader accessibility and utilization</ResumeListItemBullet>
                <ResumeListItemBullet>Designed a user-friendly React front-end hosted on AWS, providing a seamless and efficient user experience</ResumeListItemBullet>
                <ResumeListItemBullet>Integrated Firebase Authentication and Firestore to secure user login, data storage, and manage personal information, text documents, and API keys</ResumeListItemBullet>
              </ul>
              <br />
              <ResumeListItemBigger>Senttrac, Personal <span className="project-language">| React | Python</span></ResumeListItemBigger>
              <ul>
                <ResumeListItemBullet>Developed Senttrac, a real-time sentiment tracker, proficiently handling over 15,000 user requests on senttrac.com</ResumeListItemBullet>
                <ResumeListItemBullet>Built a robust Python API server to manage high-volume sentiment analysis requests efficiently and reliably</ResumeListItemBullet>
                <ResumeListItemBullet>Created a user-centric React web application, offering sentiment analysis insights to a large user base on senttrac.com</ResumeListItemBullet>
              </ul>
              <br />
              <ResumeListItemBigger>AlgoTrader, Personal <span className="project-language">| Python</span></ResumeListItemBigger>
              <ul>
                <ResumeListItemBullet>Devised and deployed a machine learning-powered algorithm for automated stock trading, generating an 18% profit against a 6% decrease in SPY, showcasing resilience and profitability</ResumeListItemBullet>
                <ResumeListItemBullet>Incorporated data from NYSE indices for comprehensive trade screening and predictive buying/selling, optimizing investment decisions</ResumeListItemBullet>
              </ul>
              <br />
              <ResumeListItemBigger>VS Code GPT, Personal <span className="project-language">| Javascript</span></ResumeListItemBigger>
              <ul>
                <ResumeListItemBullet>Developed a VS Code extension leveraging OpenAI's ChatGPT to enhance code explanation and debugging</ResumeListItemBullet>
                <ResumeListItemBullet>Achieved seamless integration within the VS Code environment, facilitating the extension's accessibility and augmenting coding experiences for over 46,000 users</ResumeListItemBullet>
              </ul>
              
            </ul>
          </ResumeSection>
      
          <br />

          <ResumeSection style={{animationDelay: '0.6s'}}>
            <ResumeSubHeader>Additional Information</ResumeSubHeader>
            <Line />
            <ul>
              <ResumeListItemBullet> Related Experience: 2nd Place High School Hackathon Winner (2019) </ResumeListItemBullet>
              <ResumeListItemBullet> Interests: Chess, Music Production, Playing Piano, Hockey </ResumeListItemBullet>
              <ResumeListItemBullet> Languages: English (Fluent), German (Fluent), Norwegian (Fluent) </ResumeListItemBullet>
            </ul>
          </ResumeSection>

        </div>

        <div style={{height: "10vh"}}></div>
      </ResumeContainer>

      <SocialLinks />
    </div>
  );
};

export default Resume;
