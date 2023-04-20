import React from 'react';
import styled from 'styled-components';
import ProjectCardLarge from './ProjectCardLarge';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  position: relative;
  background-color: #222;
  padding: 5px;
  border-radius: 18px;
  width: 50%;
  box-shadow: rgba(51, 51, 51, 0.6) 0px 4px 6px, rgba(51, 51, 51, 0.6) 0px 5px 10px -3px, rgba(51, 51, 51, 0.5) 0px -3px 0px inset;
  border: 2px solid #2f2f2f;
  z-index: 1001;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 25%;
  width: 24px;
  height: 24px;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
    background-color: ${({ theme }) => theme.colors.third};
  }
`;

const ProjectModal = ({ project, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ProjectCardLarge project={project} />
      </ModalWrapper>
    </ModalOverlay>
  );
};

export default ProjectModal;
