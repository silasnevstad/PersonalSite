import React from 'react';
import styled from 'styled-components';
import { getLanguageColor } from './Utils';

const Languages = styled.p`
    font-size: 0.8rem;
    margin: 0;
    margin-top: 15px;
    opacity: 0.6;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const LanguageSpan = styled.span`
    color: #000;
    padding: 3px 6px;
    border-radius: 5px;
    margin-right: 5px;
`;

const ProjectLanguages = ({ languages }) => {
    return (
        <Languages>{languages.map((language, index) => <LanguageSpan key={index} style={{ backgroundColor: getLanguageColor(language), marginRight: '10px' }}>{language}</LanguageSpan>)}</Languages>
    )
}

export default ProjectLanguages;