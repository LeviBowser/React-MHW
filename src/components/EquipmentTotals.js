import React, { Component } from 'react';
import Armor from './Armor';
import Weapon from './Weapon';
import Charm from './Charm';
import Decoration from './Decoration';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const RESISTANCES = ['Dragon', 'Fire', 'Ice', 'Thunder', 'Water'];
const SLOTLEVELS = [1,2,3];

class EquipmentTotals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedHead: null,
            selectedGloves: null,
            selectedChest: null,
            selectedWaist: null,
            selectedLegs: null,
            selectedWeapon: null,
            selectedCharm: null,
            SelectedDecoration: null,
            EquippedAugDefense: null,
            EquippedMaxDefense: null,
            EquippedBaseDefense: null,
            EquippedResistances: null,
            EquippedSlots: null,
        };
        this.handleArmorPieceChange = this.handleArmorPieceChange.bind(this);
        this.calculateEquipmentTotals = this.calculateEquipmentTotals.bind(this);
    }

    // componentWillMount() {
    //     this.calculateEquipmentTotals();
    // }

    calculateEquipmentTotals = () => {
        let equipmentList = [];
        let augDefenseTotal = 0;
        let maxDefenseTotal = 0;
        let baseDefenseTotal = 0;
        let equippedResistances = {};
        let equippedSlots = {};

        equipmentList.push(this.state.selectedHead);
        equipmentList.push(this.state.selectedGloves);
        equipmentList.push(this.state.selectedChest);
        equipmentList.push(this.state.selectedWaist);
        equipmentList.push(this.state.selectedLegs);

        equipmentList.map((armor) => {
            if (armor !== null && armor !== undefined) {
                augDefenseTotal = augDefenseTotal + armor.defense.augmented;
                maxDefenseTotal = maxDefenseTotal + armor.defense.max;
                baseDefenseTotal = baseDefenseTotal + armor.defense.base;

                equippedResistances = this.updateEquippedResistances(armor, equippedResistances);
                equippedSlots = this.updateEquippedSlots(armor, equippedSlots);
            }
            return true;
        })

        this.setState({ EquippedResistances: equippedResistances});
        this.setState({ EquippedAugDefense: augDefenseTotal});
        this.setState({ EquippedMaxDefense: maxDefenseTotal});
        this.setState({ EquippedBaseDefense: baseDefenseTotal});
        this.setState({ EquippedSlots: equippedSlots});
    }
    
    updateEquippedResistances = (armor, equippedResistances) => {
        RESISTANCES.forEach(function (resistance) {
            if (resistance in equippedResistances) {
                equippedResistances[resistance] = equippedResistances[resistance] + armor.resistances[resistance.toLowerCase()];
            } else {
                equippedResistances[resistance] = armor.resistances[resistance.toLowerCase()];
            }
        });
        return equippedResistances;
    }

    updateEquippedSlots = (armor, equippedSlots) => {
        let armorSlotsArray = armor.slots;

        armorSlotsArray.map(function (slot) {
            if (slot.rank in equippedSlots) {
                equippedSlots[slot.rank] = equippedSlots[slot.rank] + 1;
            } else {
                equippedSlots[slot.rank] = 1;
            }
        })

        return equippedSlots;
    }

    displaySlots = (slotsObject) => {

        if(slotsObject !== null && slotsObject !== undefined){
            let count = 0;
            let slotsKeyValues = []
            SLOTLEVELS.forEach(function (slot) {
                count = count + 3;
                let slotRankKey = count.toString() + slotsObject[slot];
                slotsKeyValues.push(
                    <li key={slotRankKey}>Lvl {slot} slot(s): {slotsObject[slot]}</li>
                )
            });
            return (
                <ul>{slotsKeyValues}</ul>
            )
        }
    }

    displayResistances = (resistancesObject) => {
        // console.log(resistancesObject);
        let resistancesKeyValues = [];
        if (resistancesObject !== null && resistancesObject !== undefined){
            RESISTANCES.forEach(function (resistance) {
                let keyValueString = resistance + ": " + resistancesObject[resistance];
                resistancesKeyValues.push(
                    <li key={keyValueString}>
                        {keyValueString}
                    </li>
                )
            });

            return (
                <ul>{resistancesKeyValues}</ul>
            )
        }
    }

    handleArmorPieceChange = (armorPiece, armorType) => {
        if (armorPiece !== null) {
            switch (armorType) {
                case 'head':
                    this.setState({ selectedHead: armorPiece }, this.calculateEquipmentTotals);
                    break;
                case 'gloves':
                    this.setState({ selectedGloves: armorPiece }, this.calculateEquipmentTotals);
                    break;
                case 'chest':
                    this.setState({ selectedChest: armorPiece }, this.calculateEquipmentTotals);
                    break;
                case 'waist':
                    this.setState({ selectedWaist: armorPiece }, this.calculateEquipmentTotals);
                    break;
                case 'legs':
                    this.setState({ selectedLegs: armorPiece }, this.calculateEquipmentTotals);
                    break;
                default:
                    console.log("ArmorPiece type not recognized: ", armorPiece);
                    break;
            }
        } else {
            switch (armorType) {
                case 'head':
                    this.setState({ selectedHead: null }, this.calculateEquipmentTotals);
                    break;
                case 'gloves':
                    this.setState({ selectedGloves: null }, this.calculateEquipmentTotals);
                    break;
                case 'chest':
                    this.setState({ selectedChest: null }, this.calculateEquipmentTotals);
                    break;
                case 'waist':
                    this.setState({ selectedWaist: null }, this.calculateEquipmentTotals);
                    break;
                case 'legs':
                    this.setState({ selectedLegs: null }, this.calculateEquipmentTotals);
                    break;
                default:
                    console.log("armorType not recognized: ", armorType);
                    break;
            }
        }
    }

    render() {

        return (
            <div>
                <div>
                    Equipment Totals<br />
                    Augmented Defense: {this.state.EquippedAugDefense}<br />
                    Max Defense: {this.state.EquippedMaxDefense}<br />
                    Base Defense: {this.state.EquippedBaseDefense}<br />
                    Resistances:<br/>
                    {this.displayResistances(this.state.EquippedResistances)}<br/>
                    Slots:<br/>
                    {this.displaySlots(this.state.EquippedSlots)}<br />
                </div>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography >Armors</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Armor onSelectArmorPiece={this.handleArmorPieceChange}/>
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
        )
    }
}

export default EquipmentTotals