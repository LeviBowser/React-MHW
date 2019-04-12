import React, { Component } from 'react';
// import logo from './logo.svg';
import Armor from './components/Armor'
// import Weapon from './components/Weapon'
// import Charm from './components/Charm'
// import Decoration from './components/Decoration'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                    
                </a>
            </header> */}
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >Armor</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Armor />
                </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >Weapon</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Weapon />
                </ExpansionPanelDetails>
            </ExpansionPanel> */}

            {/* <Armor />
            <Weapon/>
            <Charm/>
            <Decoration/> */}
        </div>

    );
  }
}

export default App;
