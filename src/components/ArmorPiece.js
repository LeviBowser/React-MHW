import React, { Component, Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// https://github.com/JedWatson/react-select
import Select from 'react-select'


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
            console.log(foundArmor);
            this.setState({selectedArmor: foundArmor})
        } else {
            this.setState({ selectedArmor: selectedOption});
        }
    }

    displaySlots = (slotsObject) => {
        let count = 0;
        let slots = slotsObject.map(function (slot) {
            count = count + 1;
            let slotRankKey = slot.rank + count.toString();
            console.log(slotRankKey)
            return (
                <li key={slotRankKey}>Slot level: {slot.rank}</li>
            )
        })

        console.log(slots)

        return (
            <ol>{slots}</ol>
        )
    }

    render(){
        if(this.state.selectedArmor !== null && this.state.selectedArmor !== undefined){
            return (
                // https://material-ui.com/demos/lists/
                // <div>
                //     <h2>
                //         {this.state.armorType}
                //     </h2>
                //     <List style={{ maxHeight: '200px', overflow: 'auto' }}>
                //         {this.state.armorList}
                //     </List>
                // </div>
                <div>
                    <div style={{ width: '250px'}}>
                        <Fragment>
                            <Select
                            // className="basic-single"
                            // classNamePrefix="select"
                            isClearable="True"
                            isSearchable="True"
                            defaultValue={this.state.listOptions[0]}
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
                        {this.displaySlots(this.state.selectedArmor.slots)}
                        Skills:<br />
                        Resistances:<br />
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
                            defaultValue={this.state.listOptions[0]}
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