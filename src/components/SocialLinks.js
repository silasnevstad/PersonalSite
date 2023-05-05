import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialLinksContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;

  z-index: 100;
`;

const SocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s;
  opacity: 0.9;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% + 0px);
    height: calc(100% + 0px);
    border-radius: 50%;
    transition: all 0.3s;
  }

  &:hover {
    opacity: 1;
    transform: scale(1.1);

    &::before {
      transform: scale(1.1);
    }
  }
`;


const LinkedinLink = styled(SocialLink)`
  background-color: #2d76b0;

  &::before {
    border: 1px solid #2d76b0;
  }
`;

const GithubLink = styled(SocialLink)`
  background-color: #333333;

  &::before {
    border: 1px solid #333333;
  }
`;

const InstagramLink = styled(SocialLink)`
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
  background-size: 150% 150%;

  &::before {
    border: 1px solid #9a2970;
  }
`;


const SocialLinks = () => {
  return (
    <SocialLinksContainer>
      <LinkedinLink href="https://www.linkedin.com/in/silas-nevstad/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin style={{ fontSize: '2.3rem' }} />
      </LinkedinLink>
      <GithubLink href="https://github.com/silasnevstad" target="_blank" rel="noopener noreferrer">
        <FaGithub style={{ fontSize: '2.3rem' }} />
      </GithubLink>
      <InstagramLink href="https://www.instagram.com/silasnevstad/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ fontSize: '2.3rem' }} />
      </InstagramLink>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
