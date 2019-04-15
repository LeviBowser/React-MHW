import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// https://github.com/JedWatson/react-select
import Select from 'react-select'

const RESISTANCES = ['Dragon', 'Fire', 'Ice', 'Thunder', 'Water'];

class ArmorPiece extends Component{
    constructor(props) {
        super();
        this.state = {
            armorPieces: props.armor,
            armorList: [],
            armorType: "",
            listOptions: [],
            selectedOption: null,
            selectedArmor: null
        };
    }

    componentDidMount(){
        let armorType = "";
        let listOptions = [];

        let armorList = this.state.armorPieces.map((armor) => {

            if (armorType === "" || armorType === undefined){
                armorType = armor.type;
                armorType = armorType.toUpperCase();
            }

            let tmpArmorItem = {
                label: armor.name,
                value: armor.id,
            } 

            listOptions.push(tmpArmorItem)
            return (
                <ListItem _armorid={armor.id} id={armor.name} key={armor.id}>
                    {armor.name}
                </ListItem>
            )
        })

        this.setState({listOptions: listOptions});
        this.setState({armorList: armorList});
        this.setState({armorType: armorType});
    }

    handleChange = (selectedOption, clear) => {
        this.setState({ selectedOption });
        if(selectedOption !== null && selectedOption !== undefined){
            let foundArmor = this.state.armorPieces.find(function(armor) {
                return armor.name === selectedOption.label && armor.id === selectedOption.value; 
            });
            this.setState({selectedArmor: foundArmor})
            // console.log(foundArmor);
        } else {
            this.setState({ selectedArmor: selectedOption});
        }
    }

    displaySlots = (slotsArray) => {
        let count = 0;
        let slots = slotsArray.map(function (slot) {
            count = count + 1;
            let slotRankKey = slot.rank + count.toString();
            // console.log(slotRankKey)
            return (
                <li key={slotRankKey}>Slot level: {slot.rank}</li>
            )
        })

        return (
            <ol>{slots}</ol>
        )
    }
    
    displaySkills = (skillsArray) => {
        let skills = [];
        skillsArray.forEach(function(skill){
            skills.push(
                <li key={skill.id}>
                    {skill.skillName} {skill.level}: {skill.description}
                </li>
            )
        });

        return (
            <ol>{skills}</ol>
        )
    }
    
    displayResistances = (resistancesObject) => {
        // console.log(resistancesObject);
        let resistancesKeyValues = [];
        RESISTANCES.forEach(function(resistance){
            let keyValueString = resistance + ": " + resistancesObject[resistance.toLowerCase()];
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

    render(){
        if(this.state.selectedArmor !== null && this.state.selectedArmor !== undefined){
            return (
                <div>
                    <div style={{ width: '250px'}}>
                        <Fragment>
                            <Select
                            isClearable="True"
                            isSearchable="True"
                            value={this.state.selectedOption}
                            name={this.state.listOptions}
                            options={this.state.listOptions}
                            onChange={this.handleChange}
                            />
                        </Fragment>
                    </div>
                    <div>####male image</div>
                    <div>####female image</div>
                    <div>
                        Armor Name: {this.state.selectedArmor.name}<br/>
                        Armor Rank: {this.state.selectedArmor.rank}<br />
                        Armor Rarity: {this.state.selectedArmor.rarity}<br />
                        Armor defense (base): {this.state.selectedArmor.defense.base}<br/>
                        Armor defense (max): {this.state.selectedArmor.defense.max}<br />
                        Jewel Slots: {this.state.selectedArmor.slots.length}<br/>
                        {this.displaySlots(this.state.selectedArmor.slots)}<br/>
                        Skills:<br />
                        {this.displaySkills(this.state.selectedArmor.skills)}<br />
                        Resistances:<br />
                        {this.displayResistances(this.state.selectedArmor.resistances)}<br/>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ width: '250px' }}>
                    <Fragment>
                        <Select
                            // className="basic-single"
                            // classNamePrefix="select"
                            isClearable="True"
                            isSearchable="True"
                            value={this.state.selectedOption}
                            name={this.state.listOptions}
                            options={this.state.listOptions}
                            onChange={this.handleChange}
                        />
                    </Fragment>
                </div>
            )
        }
    }
}

export default ArmorPiece