import React from 'react';
import styled from 'styled-components';
import { formatRequests } from './Utils';

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
    width: 90px;
    height: 90px;
    border-radius: 15px;
    margin-right: 15px;
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
    font-size: .9rem;
    margin: 0;
    margin-top: 10px;
    opacity: 0.6;
    color: ${({ theme }) => theme.colors.text};
`;

const ProjectLink = styled.a`
    width: 4em;
    // text-align: left;
    border: none;
    background: none;
    font-size: 1rem;
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
        width: 70%;
        transform: scaleX(0);
        height: 2px;
        bottom: 10px;
        left: 0px;
        background-color: #0000006a;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    &:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

// const GithubLink = styled.a`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 35px;
//   height: 35px;
//   border-radius: 50%;
//   color: #fff;
//   transition: all 0.3s;
//   opacity: 0.9;
//   background-color: #333333;
//   margin-right: 15px;

//   &::before {
//     content: '';
//     position: absolute;
//     width: calc(100% + 0px);
//     height: calc(100% + 0px);
//     border-radius: 50%;
//     transition: all 0.3s;
//     border: 1px solid #333333;
//   }

//   &:hover {
//     opacity: 1;
//     transform: scale(1.1);

//     &::before {
//       transform: scale(1.1);
//     }
//   }
// `;

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
                    
                    <ProjectLanguages>{project.languages}</ProjectLanguages>
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
