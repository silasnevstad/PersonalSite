import React from 'react';
import styled from 'styled-components';
import { formatRequests } from './Utils';
import ProjectLanguages from './ProjectLanguages';

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

const CardLargeHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CardLargeHeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
`;

const ProjectLogo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 15px;
    margin-right: 15px;
`;

const ProjectTitle = styled.h2`
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Inter', sans-serif;
`;

const ProjectDescription = styled.p`
    font-size: 1.2rem;
    margin: 0;
    margin-top: 25px;
    opacity: 0.8;
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
    letter-spacing: 0.4px;
`;

const ProjectDeveloper = styled.p`
    font-size: 1rem;
    margin: 0;
    margin-top: 10px;
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', sans-serif;
`;

const ProjectFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin-top: 15px;
`;

const ProjectFooterLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ProjectFooterRequests = styled.p`
    font-size: 1rem;
    margin: 0;
    margin-top: 10px;
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.4px;
`;

const ProjectLink = styled.a`
    width: 4em;
    border: none;
    background: none;

    margin: 0;
    margin-top: 25px;
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.text};
    padding-bottom: 7px;
    letter-spacing: 2px;
    padding-right: 15px;
    position: relative;
    padding-bottom: 20px;
    font-size: 1.2rem;
    font-family: 'Inter', sans-serif;
    letter-spacing: 2px;

    &:after {
        content: "";
        position: absolute;
        width: 50%;
        transform: scaleX(0);
        height: 2px;
        bottom: 10px;
        left: 0px;
        background-color: #ddd;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

const ProjectCardLarge = ({ project }) => {
    return (
        <CardLarge>
            <CardLargeHeader>
                {project.logo && <ProjectLogo src={require('../images/' + project.logo)} />}
                <CardLargeHeaderInfo>
                    <span style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        {/* <ProjectVersion>{project.version}</ProjectVersion> */}
                    </span>
                    
                    <ProjectLanguages languages={project.languages} />
                    <ProjectDeveloper>{project.developers}</ProjectDeveloper>
                </CardLargeHeaderInfo>
            </CardLargeHeader>

            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectFooter>
                <ProjectFooterLeft>
                    {/* {project.github !== '' && <GithubLink href={'https://github.com/silasnevstad/' + project.github}><FaGithub size={30} /></GithubLink>} */}
                    {project.url !== '' && 
                    <ProjectLink href={project.url}>
                        Visit
                    </ProjectLink>}
                </ProjectFooterLeft>
                    
                <ProjectFooterRequests>{formatRequests(project)}</ProjectFooterRequests>
            </ProjectFooter>
        </CardLarge>
    );
};

export default ProjectCardLarge;
