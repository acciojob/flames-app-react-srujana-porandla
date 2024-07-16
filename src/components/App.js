//import React, {Component} from "react";
//import '../styles/App.css';
import React, { useState } from 'react';
import '../styles/App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');

  const handleName1Change = (event) => {
    setName1(event.target.value);
  };

  const handleName2Change = (event) => {
    setName2(event.target.value);
  };

  const calculateRelationship = () => {
    
    if (!name1 || !name2) {
       setRelationshipStatus('Please Enter valid input');
      return;
    }
    const name1Set = new Set(name1.toUpperCase());
    const name2Set = new Set(name2.toUpperCase());

    // Remove common characters
    let remainingName1 = [...name1.toUpperCase()].filter(char => !name2Set.has(char)).join('');
    let remainingName2 = [...name2.toUpperCase()].filter(char => !name1Set.has(char)).join('');

    const sumOfLengths = remainingName1.length + remainingName2.length;

    
    const statusIndex = sumOfLengths % 6;

   const statuses = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];

    setRelationshipStatus(statuses[statusIndex]);
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setRelationshipStatus('');
  };

  return (
    <div className="App">
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter second name"
          value={name1}
          onChange={handleName1Change}
          data-testid="input1"
          name="name1" 
        />
        <input
          type="text"
          placeholder="Enter first name"
          value={name2}
          onChange={handleName2Change}
          data-testid="input2"
          name="name2"
        />
      </div>
      <div className="button-container">
        <button type="button" onClick={calculateRelationship} data-testid="calculate_relationship">
          Calculate Relationship Future
        </button>
        <button type="button" onClick={clearInputs} data-testid="clear">
          Clear
        </button>
      </div>
      {relationshipStatus && (
        <h3 data-testid="answer"></h3>
      )}
    </div>
  );
}

export default App;

