import React from 'react';
import './ResultsContainer.css';
import NameCard from './../NameCard/NameCard';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNamesJsx = suggestedNames.map((suggestedName, index) => {
        return <NameCard key={index} suggestedName={suggestedName} />;
    });
    return <div className="results-container">{suggestNamesJsx}</div>;
};

export default ResultsContainer;
