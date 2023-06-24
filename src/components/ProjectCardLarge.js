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

    max-height: 90vh;

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


    @media (max-width: 768px) {
        overflow-y: scroll;
    }
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

const ProjectVisitButton = styled.button`
    --primary-color: #bbb;
    --hovered-color: #81a1f7;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    position: relative;
    display: flex;
    font-weight: 500;
    font-size: 20px;
    gap: 0.5rem;
    align-items: center;

    & p {
        margin: 0;
        position: relative;
        font-size: 20px;
        color: var(--primary-color)
    }

    & p::before {
        position: absolute;
        content: "Visit";
        width: 0%;
        inset: 0;
        color: var(--hovered-color);
        overflow: hidden;
        transition: 0.3s ease-out;
    }

    &::after {
        position: absolute;
        content: "";
        width: 0;
        left: 0;
        bottom: -7px;
        background: var(--hovered-color);
        height: 2px;
        transition: 0.3s ease-out;
    }

    &:hover::after {
        width: 100%;
    }

    &:hover p::before {
        width: 100%;
    }

    &:hover svg {
        transform: translateX(4px);
        color: var(--hovered-color) 
    }

    &:hover {
        cursor: pointer;
    }

    & svg {
        color: var(--primary-color);
        transition: 0.2s;
        position: relative;
        width: 15px;
        transition-delay: 0.2s;
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
                        <ProjectVisitButton onClick={() => window.open(project.url, '_blank')}>
                            <p>Visit</p>
                            <svg stroke-width="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
                            </svg>
                        </ProjectVisitButton>
                        // <ProjectLink href={project.url}>
                        //     Visit
                        // </ProjectLink>
                    }
                </ProjectFooterLeft>
                    
                <ProjectFooterRequests>{formatRequests(project)}</ProjectFooterRequests>
            </ProjectFooter>
        </CardLarge>
    );
};

export default ProjectCardLarge;
