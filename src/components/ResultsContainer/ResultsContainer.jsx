import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard.jsx';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestedNamesJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestedNamesJsx}</div>;
};

export default ResultsContainer;
