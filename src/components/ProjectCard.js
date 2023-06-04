import React from 'react';
import styled from 'styled-components';
import { formatRequests } from './Utils';
import ProjectLanguages from './ProjectLanguages';

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 18px;
    width: calc(screen.width / 2 - 20px)
    height: 70%;
    padding: 15px;
    margin: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    transition: all 0.3s ease-in-out;
    transition: transform 0.3s;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 5px 10px -3px, rgba(0, 0, 0, .3) 0px -3px 0px inset;
    // border: 1px solid #2f2f2f;
    animation: bounce-in-right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${({ index }) => index * 0.1}s both;
    font-family: 'Inter', sans-serif;
    
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 6px, rgba(0, 0, 0, 0.3) 0px 5px 10px -3px, rgba(0, 0, 0, 0.3) 0px -3px 0px inset;
        background-color: ${({ theme }) => theme.colors.fifth};
    }

    @keyframes bounce-in-right {
        0% {
          opacity: 0;
          transform: translateX(2000px);
        }
        60% {
          opacity: 1;
          transform: translateX(-30px);
        }
        80% { transform: translateX(10px); }
        100% { transform: translateX(0); }
    }

    @media (max-width: 768px) {
        width: calc(screen.width - 150px);
        box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 6px, rgba(0, 0, 0, 0.4) 0px 5px 10px -3px, rgba(0, 0, 0, .4) 0px -3px 0px inset, rgba(0, 0, 0, .2) 0px 0px 0px 1px inset;
        padding: 12px;
        margin: 5px;
    }
`;

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.h2`
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
    color: #ddd;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const ProjectVersion = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: .9rem;
    font-weight: 500;
    margin: 0;
    margin-top: 2px;
    opacity: 0.5;

    @media (max-width: 768px) {
        font-size: .9rem;
    }
`;

const ProjectDate = styled.p`
    color: #ddd;
    font-size: .8rem;
    font-weight: 500;
    margin: 0;
    margin-top: 15px;
    opacity: 0.4;

    @media (max-width: 768px) {
        font-size: .8rem;
    }
`;

const ProjectLogo = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 30%;
    margin-left: auto; // added to push the image to the right
    margin-top: auto;
    margin-bottom: auto;

    @media (max-width: 768px) {
        // margin-top: 0;
        width: 70px;
        height: 70px;
    }
`;

const convertDateString = (dateString) => {
    // date can either be 1 May 2023 or May 2023, remove the day if it exists
    const date = dateString.split(' ');
    if (date.length === 3) {
        date.shift();
    }
    return date.join(' ');
};

const ProjectCard = ({ project, onClick, index }) => {
  return (
      <Card onClick={onClick} index={index}>
        <ProjectInfo>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectVersion>{formatRequests(project)}</ProjectVersion>
          <ProjectLanguages languages={project.languages} />
          {/* <ProjectLanguages>{project.languages.map((language, index) => <LanguageSpan key={index} style={{ backgroundColor: getLanguageColor(language), marginRight: '18px', marginLeft: '-10px' }}>{language}</LanguageSpan>)}</ProjectLanguages>  <span style={{letterSpacing: '-2.5px', fontSize: '1.5em', marginTop: '1em'}}>• </span> */}
          {/* <ProjectDeveloper>{project.developers}</ProjectDeveloper> */}
          <ProjectDate>{convertDateString(project.date)}</ProjectDate>
          {/* <ProjectClicks>{formatRequests(project.requests)}</ProjectClicks> */}
        </ProjectInfo>
        {project.logo !== '' && <ProjectLogo src={require('../images/' + project.logo)} alt='Project Logo' />}
      </Card>
  );
};

export default ProjectCard;
