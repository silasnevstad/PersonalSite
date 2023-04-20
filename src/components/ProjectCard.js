import React from 'react';
import styled, { keyframes } from 'styled-components';

const Bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    15% {
        transform: translateY(-10px);
    }
    30% {
        transform: translateY(-5px);
    }
    45% {
        transform: translateY(-2px);
    }
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 18px;
    width: calc(screen.width / 2 - 20px)
    height: 70%;
    padding: 15px;
    margin: 10px;
    display: flex;
    flex-direction: row; // changed to row from column
    align-items: flex-start; // changed from left
    text-align: left;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: rgba(50, 50, 50, 0.2) 0px 4px 6px, rgba(150, 150, 150, 0.2) 0px 5px 10px -3px, rgba(80, 80, 80, 0.2) 0px -3px 0px inset;
    border: 1px solid #2f2f2f;
    animation: ${({ bounce }) => bounce ? Bounce : 'none'} 1.5s cubic-bezier(0.22, 0.61, 0.36, 1) 2;

    &:hover {
        transform: translateY(-5px);
        box-shadow: rgba(50, 50, 50, 0.6) 0px 8px 12px, rgba(150, 150, 150, 0.6) 0px 10px 20px -3px, rgba(80, 80, 80, 0.6) 0px -3px 0px inset;
    }

    @media (max-width: 768px) {
        width: calc(screen.width - 100px);
        padding: 15px;
        margin: 5px;
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

    animation: bounce-in-right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${({ index }) => index * 0.1}s both;
`;

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProjectTitle = styled.h2`
    font-size: 1.4rem;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const ProjectVersion = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .9rem;
    margin: 0;
    margin-top: 5px;
    opacity: 0.8;

    @media (max-width: 768px) {
        font-size: .8rem;
    }
`;

const ProjectLanguages = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 0.8rem;
    margin: 0;
    margin-top: 8px;
    opacity: 0.5;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const ProjectDeveloper = styled.p`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: .8rem;
    margin: 0;
    margin-top: 8px;
    opacity: 0.6;

    @media (max-width: 768px) {
        font-size: .7rem;
    }
`;

const ProjectLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 30%;
    margin-left: auto; // added to push the image to the right

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;

const ProjectCard = ({ project, onClick, bounce, index }) => {
  return (
      <Card onClick={onClick} bounce={bounce} index={index}>
        <ProjectInfo>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectVersion>{project.version}</ProjectVersion>
          <ProjectLanguages>{project.languages}</ProjectLanguages>
          <ProjectDeveloper>{project.developers}</ProjectDeveloper>
        </ProjectInfo>
        {project.logo !== '' && <ProjectLogo src={require('../images/' + project.logo)} alt='Project Logo' />}
      </Card>
  );
};

export default ProjectCard;
