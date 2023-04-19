import React from 'react';
import { useParams } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <div>
      <NavigationMenu />
      <h1>Project Details: {projectId}</h1>
      {/* Include your project details content here */}
    </div>
  );
};

export default ProjectDetails;
