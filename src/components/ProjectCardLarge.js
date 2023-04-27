import React from 'react';
import styled from 'styled-components';

const CardLarge = styled.div`
    padding: 10px 5px;
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
    color: ${({ theme }) => theme.colors.secondary};
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
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
    margin: 0;
    margin-left: 15px;
    opacity: 0.8;
`;

const ProjectLanguages = styled.p`
    color: ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.text};
`;

const ProjectLink = styled.button`
    width: 10em;
    text-align: left;
    border: none;
    background: none;
    font-size: 1.2rem;
    margin: 0;
    margin-top: 25px;
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.secondary};
    padding-bottom: 7px;
    letter-spacing: 2px;
    padding-right: 15px;
    position: relative;
    padding-bottom: 20px;

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &:hover svg {
        transform: translateX(15px);
    }
`;

const ProjectLinkSVG = styled.svg`
    transform: translateX(10px);
    transition: all 0.3s ease;

    &:active {
        transform: scale(0.9);
    }

    &:hover {
        transform: translateX(15px);
    }
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

            {project.url !== '' && 
            <ProjectLink href={project.url} target="_blank">
                View Project
                <ProjectLinkSVG viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                </ProjectLinkSVG>
            </ProjectLink>}
            {/* You can add more project details here, like an image or technologies used */}
        </CardLarge>
    );
};

export default ProjectCardLarge;
