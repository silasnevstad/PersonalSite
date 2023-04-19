import React from 'react';
import styled from 'styled-components';

const CardLarge = styled.div`
    padding: 10px 5px;
    padding-top: 30px;
    margin: 10px;

    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;

    animation: fadein 0.5s;

    @keyframes fadein {
        from { opacity: 0; }
        to   { opacity: 1; }
    }
`;

const ProjectTitle = styled.h2`
    font-size: 1.6rem;
    margin: 0;
`;

const ProjectDescription = styled.p`
    font-size: 1.1rem;
    margin: 0;
    margin-top: 25px;
    opacity: 0.8;
`;

const ProjectVersion = styled.p`
    font-size: 1rem;
    margin: 0;
    margin-left: 15px;
    opacity: 0.8;
`;

const ProjectLanguages = styled.p`
    font-size: .9rem;
    margin: 0;
    margin-top: 10px;
    opacity: 0.5;
`;

const ProjectDeveloper = styled.p`
    font-size: .9rem;
    margin: 0;
    margin-top: 10px;
    opacity: 0.6;
`;

const ProjectLink = styled.a`
    font-size: 1.2rem;
    margin: 0;
    margin-top: 25px;
    opacity: 0.6;
`;

const ProjectLogo = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 30%;
    margin-left: auto;
`;

const ProjectCardLarge = ({ project }) => {

    return (
        <CardLarge>
            <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectVersion>{project.version}</ProjectVersion>
            </span>
            
            <ProjectLanguages>{project.languages}</ProjectLanguages>
            <ProjectDeveloper>{project.developers}</ProjectDeveloper>
            <ProjectDescription>{project.description}</ProjectDescription>

            {project.url !== '' && <ProjectLink href={project.url} target="_blank">View Project</ProjectLink>}
            {/* You can add more project details here, like an image or technologies used */}
        </CardLarge>
    );
};

export default ProjectCardLarge;
