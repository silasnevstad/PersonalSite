import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 18px;
    width: 90%;
    height: 70%;
    padding: 15px;
    margin: 10px;
    display: flex;
    flex-direction: row; // changed to row from column
    align-items: flex-start; // changed from left
    text-align: left;
    transition: all 0.3s;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: rgba(50, 50, 50, 0.3) 0px 4px 6px, rgba(150, 150, 150, 0.3) 0px 5px 10px -3px, rgba(80, 80, 80, 0.3) 0px -3px 0px inset;

    &:hover {
        transform: translateY(-5px);
        box-shadow: rgba(50, 50, 50, 0.6) 0px 8px 12px, rgba(150, 150, 150, 0.6) 0px 10px 20px -3px, rgba(80, 80, 80, 0.6) 0px -3px 0px inset;
    }

    @media (max-width: 768px) {
        width: 85%;
        padding: 15px;
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
        width: 70px;
        height: 70px;
    }
`;

const ProjectCard = ({ project, onClick }) => {
  return (
      <Card onClick={onClick}>
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
