import React, { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import NavigationHeader from './NavigationHeader';
import SocialLinks from './SocialLinks';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import styled from 'styled-components';
import downArrow from '../images/arrow-down.svg';
import { PROJECTS } from './constants';

const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  position: relative;
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OuterProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SortProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
  margin-right: 1em;
  margin-top: 5em;
  margin-bottom: .5em;
  gap: .2em;
  position: relative;
  background-color: #333;
  border-radius: 0.5em;
  // width: 100%;

  @media (max-width: 768px) {
    margin-top: 4.2em;
  }
`;

const SortByItem = styled.div`
  font-size: 1em;
  color: ${({ isActive }) => isActive ? '#eee' : '#ccc'};
  cursor: pointer;
  padding: 0.5em 1em;
  padding-left: 2em;
  border-radius: 0.5em;
  background-color: ${({ isActive }) => isActive ? '#444' : 'transparent'};

  &:hover {
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding-left: 2em;
  }
`;

const SortByArrow = styled.img`
  width: 1em;
  height: 1em;
  position: absolute;
  bottom: .7em;
  right: ${({ rightPosition }) => rightPosition || '0'}em;

  @media (max-width: 768px) {
    width: 0.9em;
    height: 0.9em;
    bottom: .6em;
  }
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  grid-row-gap: 7%;
  flex-wrap: wrap;
  justify-content: left;
  gap: 8px;
  transition: margin-left 0.3s ease-in-out;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 1%;
    margin: 1em 2em;
    width: 90%;
  }
`;

const parseDate = (dateString) => {
  const months = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  if (!dateString) return null;

  // sometimes there will be  a day as well, so its either 1 May 2023 or just May 2023 so we need to handle both cases
  if (dateString.split(' ').length === 2) {
    dateString = `1 ${dateString}`;
  }
  const [day, monthStr, year] = dateString.split(' ');
  const month = months[monthStr];

  return new Date(year, month, day);
};

const sortByDate = (a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);

  if (!dateA || !dateB) return dateA ? -1 : 1;

  return dateB - dateA;
};

const Projects = ({ isMenuOpen, toggleMenu }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortBy, setSortBy] = useState('date');
  const [sortKey, setSortKey] = useState(0); // to retrigger sort animation

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
    setSortKey(sortKey + 1);
  };

  const sortProjects = (a, b) => {
    if (sortBy === 'date') {
      return sortByDate(a, b);
    } else if (sortBy === 'popularity') {
      return b.requests - a.requests;
    }
  };

  const projects = PROJECTS.sort(sortProjects);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <AppContainer>
      <NavigationMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <NavigationHeader isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <OuterProjectsContainer isMenuOpen={isMenuOpen}>
        <SortProjectsContainer>
          <SortByItem
            isActive={sortBy === 'date'}
            onClick={() => handleSortChange('date')}
          >
            Most Recent
          </SortByItem>
          <SortByArrow src={downArrow} rightPosition={sortBy === 'date' ? window.innerWidth < 768 ? '14.5' : '16.1' : window.innerWidth < 768 ? '6.7' : '7.3'} />
          <SortByItem
            isActive={sortBy === 'popularity'}
            onClick={() => handleSortChange('popularity')}
          >
            Most Popular
          </SortByItem>
        </SortProjectsContainer>
        <ProjectsContainer isMenuOpen={isMenuOpen}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={`${project.id}-${sortKey}`}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </ProjectsContainer>
      </OuterProjectsContainer>
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
    <SocialLinks />
    </AppContainer>  
  );
};

export default Projects;