import React from 'react';
import styled from 'styled-components';
import { formatRequests } from './Utils';

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
    // box-shadow: rgba(50, 50, 50, 0.2) 0px 4px 6px, rgba(150, 150, 150, 0.2) 0px 5px 10px -3px, rgba(80, 80, 80, 0.2) 0px -3px 0px inset;
    border: 1px solid #2f2f2f;
    animation: bounce-in-right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${({ index }) => index * 0.1}s both;
    
    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 12px, rgba(0, 0, 0, 0.3) 0px 10px 20px -3px, rgba(80, 80, 80, 0.3) 0px -3px 0px inset;
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
        padding: 12px;
        margin: 5px;
    }
`;

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.h2`
    font-size: 1.4rem;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const ProjectVersion = styled.p`
    color: #888;
    font-size: .9rem;
    margin: 0;
    margin-top: 5px;
    opacity: 0.8;

    @media (max-width: 768px) {
        font-size: .7rem;
    }
`;

const ProjectLanguages = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
    margin: 0;
    margin-top: 8px;
    opacity: 0.6;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const ProjectDate = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .8rem;
    margin: 0;
    margin-top: 8px;
    opacity: 0.4;

    @media (max-width: 768px) {
        font-size: .7rem;
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
        margin-top: 0;
        width: 25px;
        height: 25px;
    }
`;

const ProjectCard = ({ project, onClick, index }) => {
  return (
      <Card onClick={onClick} index={index}>
        <ProjectInfo>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectVersion>{formatRequests(project)}</ProjectVersion>
          <ProjectLanguages>{project.languages}</ProjectLanguages>
          {/* <ProjectDeveloper>{project.developers}</ProjectDeveloper> */}
          <ProjectDate>{project.date}</ProjectDate>
          {/* <ProjectClicks>{formatRequests(project.requests)}</ProjectClicks> */}
        </ProjectInfo>
        {project.logo !== '' && <ProjectLogo src={require('../images/' + project.logo)} alt='Project Logo' />}
      </Card>
  );
};

export default ProjectCard;
