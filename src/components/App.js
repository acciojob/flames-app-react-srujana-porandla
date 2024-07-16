import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name1: '',
          name2: '',
          relationshipStatus: ''
        };
      }
    
      handleName1Change = (event) => {
        this.setState({ name1: event.target.value });
      };
    
      handleName2Change = (event) => {
        this.setState({ name2: event.target.value });
      };
    
      calculateRelationship = () => {
        const { name1, name2 } = this.state;
        const name1Set = new Set(name1.toUpperCase());
        const name2Set = new Set(name2.toUpperCase());
    
        // Remove common characters
        let remainingName1 = [...name1.toUpperCase()].filter(char => !name2Set.has(char)).join('');
        let remainingName2 = [...name2.toUpperCase()].filter(char => !name1Set.has(char)).join('');
    
        // Calculate sum of remaining lengths
        const sumOfLengths = remainingName1.length + remainingName2.length;
    
        // Determine relationship status
        const statusIndex = sumOfLengths % 6;
    
        // Relationship statuses based on FLAMES game
        const statuses = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"];
    
        this.setState({ relationshipStatus: statuses[statusIndex] });
      };
    
      clearInputs = () => {
        this.setState({
          name1: '',
          name2: '',
          relationshipStatus: ''
        });
      };
    
      render() {
        const { name1, name2, relationshipStatus } = this.state;
    
        return (
          <div id="main">
            <h1>FLAMES Relationship Calculator</h1>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter Name 1"
                value={name1}
                onChange={this.handleName1Change}
                data-testid="input1"
              />
              <input
                type="text"
                placeholder="Enter Name 2"
                value={name2}
                onChange={this.handleName2Change}
                data-testid="input2"
              />
            </div>
            <div className="button-container">
              <button onClick={this.calculateRelationship} data-testid="calculate_relationship">
                Calculate Relationship Future
              </button>
              <button onClick={this.clearInputs} data-testid="clear">
                Clear
              </button>
            </div>
            {relationshipStatus && (
              <h3 data-testid="answer">Relationship: {relationshipStatus}</h3>
            )}
          </div>
        );
      }

}


export default App;
