import React, { Component } from 'react';
import ArmorPiece from './ArmorPiece'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Armor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            armors: [],
            heads: [],
            gloves: [],
            chests: [],
            waists: [],
            legs: [],
            isLoading: true,
        };
    }

    componentDidMount(){
        fetch("https://mhw-db.com/armor")
        .then(results => {
            return results.json();
        }).then(data => {
            let heads = [];
            let gloves = [];
            let chests = [];
            let waists = [];
            let legs = [];

            let armors = data.map((armor) => {
                switch(armor.type){
                    case 'head':
                        heads.push(armor);
                        break;
                    case 'gloves':
                        gloves.push(armor);
                        break;
                    case 'chest':
                        chests.push(armor);
                        break;
                    case 'waist':
                        waists.push(armor)
                        break;
                    case 'legs':
                        legs.push(armor)
                        break;
                    default:
                        console.log(armor)
                        break;
                }

                return (
                    armor
                )
            })
            this.setState({ armors: armors });
            this.setState({ heads: heads });
            this.setState({ chests: chests });
            this.setState({ gloves: gloves });
            this.setState({ waists: waists });
            this.setState({ legs: legs });
            this.setState({isLoading: false});
        })
    }

    render(){
        if (this.state.isLoading) {
            return <div>Loading Armors...</div>
        }

        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Head</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.heads} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Chest</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.chests} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Gloves</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.gloves} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Waist</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.waists} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Legs</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.legs} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
            // <div>
            //     <div>
            //         <ArmorPiece armor={this.state.heads} />
            //     </div>
            //     <div>
            //         <ArmorPiece armor={this.state.gloves} />
            //     </div>
            //     <div>
            //         <ArmorPiece armor={this.state.chests} />
            //     </div>
            //     <div>
            //         <ArmorPiece armor={this.state.waists} />
            //     </div>
            //     <div>
            //         <ArmorPiece armor={this.state.legs} />
            //     </div>
            // </div>
        )
    }
}

export default Armor