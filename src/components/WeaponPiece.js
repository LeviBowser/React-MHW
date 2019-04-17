import React, { Component, Fragment } from 'react';
// https://github.com/JedWatson/react-select
import Select from 'react-select'


class WeaponPiece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weaponPieces: props.weapon,
            weaponType: "",
            listOptions: [],
            selectedOption: null,
            selectedWeapon: null
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.weapon !== state.weaponPieces) {
            state.weaponPieces = props.weapon;
            // console.log("state.weaponPieces: ", state.weaponPieces);
            state.selectedOption = null;
            state.selectedWeapon = null;
            
            let weaponType = "";
            let listOptions = [];
            state.weaponPieces.map((weapon) => {
                if (weaponType === "" || weaponType === undefined) {
                    weaponType = weapon.type;
                    weaponType = weaponType.toUpperCase();
                }

                let tmpweaponItem = {
                    label: weapon.name,
                    value: weapon.id,
                }

                listOptions.push(tmpweaponItem)
            })

            state.listOptions = listOptions;
            state.weaponType = weaponType;
        }
        return null;
    }

    componentDidMount() {
        let weaponType = "";
        let listOptions = [];

        this.state.weaponPieces.map((weapon) => {
            if (weaponType === "" || weaponType === undefined) {
                weaponType = weapon.type;
                weaponType = weaponType.toUpperCase();
            }

            let tmpweaponItem = {
                label: weapon.name,
                value: weapon.id,
            }

            listOptions.push(tmpweaponItem)
        })
        this.setState({ listOptions: listOptions });
        this.setState({ weaponType: weaponType });
    }

    handleChange = (selectedOption, clear) => {
        this.setState({ selectedOption });
        if (selectedOption !== null && selectedOption !== undefined) {
            let foundweapon = this.state.weaponPieces.find(function (weapon) {
                return weapon.name === selectedOption.label && weapon.id === selectedOption.value;
            });
            this.setState({ selectedWeapon: foundweapon })
            // console.log(foundweapon);
        } else {
            this.setState({ selectedWeapon: selectedOption });
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
            <ul>{slots}</ul>
        )
    }

    displayElements = (elementsArray) => {
        let elements = [];
        elementsArray.forEach(function (element) {
            let tmpKey = element.type + "-" + element.damage + "-" + element.hidden;
            elements.push(
                <li key={tmpKey}>
                    {element.type}: {element.damage}
                </li>
            )
        });
        return (
            <ul>{elements}</ul>
        )
    }


    render() {
        if (this.state.selectedWeapon !== null && this.state.selectedWeapon !== undefined) {
            return (
                <div style={{ width: '250px' }}>
                    <div >
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
                    <div>
                        <img alt={this.state.selectedWeapon.name} src={this.state.selectedWeapon.assets.image} />
                    </div>
                    <div>
                        Weapon Name: {this.state.selectedWeapon.name}<br />
                        Weapon Rarity: {this.state.selectedWeapon.rarity}<br />
                        Weapon Damage: {this.state.selectedWeapon.attack.display}<br />
                        Weapon Damage (raw): {this.state.selectedWeapon.attack.raw}<br />
                        Weapon Element(s): <br/>
                        {this.displayElements(this.state.selectedWeapon.elements)}<br />
                        Weapon Damage type: {this.state.selectedWeapon.attributes.damageType}<br />
                        Jewel Slots: {this.state.selectedWeapon.slots.length}<br />
                        {this.displaySlots(this.state.selectedWeapon.slots)}<br />
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

export default WeaponPiece