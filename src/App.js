import React, { Component } from 'react';
import Armor from './components/Armor'
import Weapon from './components/Weapon'
import Charm from './components/Charm'
import Decoration from './components/Decoration'
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
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >Armors</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Armor />
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >Weapons</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Weapon />
                </ExpansionPanelDetails>
            </ExpansionPanel>
 
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >Charms</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Charm />
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography >Decorations</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Decoration />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
  }
}

export default App;
