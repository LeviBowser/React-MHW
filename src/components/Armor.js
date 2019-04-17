import React, { Component } from 'react';
import ArmorPiece from './ArmorPiece';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import headImg from '../images/head.png';
import chestImg from '../images/chest.png';
import waistImg from '../images/waist.png';
import glovesImg from '../images/gloves.png';
import legsImg from '../images/legs.png';

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
            selectedHead: null,
            selectedGloves: null,
            selectedChest: null,
            selectedWaist: null,
            selectedLegs: null,
        };

        this.handleArmorChange = this.handleArmorChange.bind(this);
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
            this.setState({ isLoading: false });
        })
    }

    handleArmorChange = (armor, componentArmorType) => {
        if (armor !== null){
            switch (armor.type) {
                case 'head':
                    this.setState({selectedHead: armor});
                    break;
                case 'gloves':
                    this.setState({selectedGloves: armor});
                    break;
                case 'chest':
                    this.setState({selectedChest: armor});
                    break;
                case 'waist':
                    this.setState({selectedWaist: armor});
                    break;
                case 'legs':
                    this.setState({selectedLegs: armor});
                    break;
                default:
                    console.log("Armor type not recognized: ", armor);
                    break;
            }
            this.props.onSelectArmorPiece(armor, armor.type);
        } else {
            switch (componentArmorType) {
                case 'head':
                    this.setState({ selectedHead: null });
                    break;
                case 'gloves':
                    this.setState({ selectedGloves: null });
                    break;
                case 'chest':
                    this.setState({ selectedChest: null });
                    break;
                case 'waist':
                    this.setState({ selectedWaist: null });
                    break;
                case 'legs':
                    this.setState({ selectedLegs: null });
                    break;
                default:
                    console.log("componentArmorType not recognized: ", componentArmorType);
                    break;
            }
            this.props.onSelectArmorPiece(armor, componentArmorType);
        }
    }


    render(){
        if (this.state.isLoading) {
            return <div>Loading Armors...</div>
        }

        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >
                            Head 
                            {this.state.selectedHead !== null && 
                                <img alt="armor-icon" className="armor-icon" src={headImg}/>
                            }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.heads} onSelectArmor={this.handleArmorChange}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >
                            Chest
                            {this.state.selectedChest !== null && 
                                <img alt="armor-icon" className="armor-icon" src={chestImg}/>
                            }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.chests} onSelectArmor={this.handleArmorChange}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >
                            Gloves
                            {this.state.selectedGloves !== null &&
                                <img alt="armor-icon" className="armor-icon" src={glovesImg}/>
                            }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.gloves} onSelectArmor={this.handleArmorChange}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >
                            Waist
                            {this.state.selectedWaist !== null &&
                                <img alt="armor-icon" className="armor-icon" src={waistImg}/>
                            }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.waists} onSelectArmor={this.handleArmorChange}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >
                            Legs
                            {this.state.selectedLegs !== null &&
                                <img alt="armor-icon" className="armor-icon" src={legsImg}/>
                            }
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ArmorPiece armor={this.state.legs} onSelectArmor={this.handleArmorChange}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

export default Armor