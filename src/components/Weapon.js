import React, { Component, Fragment } from 'react';
import WeaponPiece from './WeaponPiece';
import Select from 'react-select'


// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2

const WEAPONLISTTYPES = [
    {
        label: 'Great Swords',
        value: 'great_swords',
    },
    {
        label: 'Long Swords',
        value: 'long_swords',
    },
    {
        label: 'Sword and Shields',
        value: 'sword_and_shields',
    },
    {
        label: 'Dual Blades',
        value: 'dual_blades',
    },
    {
        label: 'Hammers',
        value: 'hammers',
    },
    {
        label: 'Hunting Horns',
        value: 'hunting_horns',
    },
    {
        label: 'Lances',
        value: 'lances',
    },
    {
        label: 'Gunlances',
        value: 'gunlances',
    },
    {
        label: 'Switch Axes',
        value: 'switch_axes',
    },
    {
        label: 'Charge Blades',
        value: 'charge_blades',
    },
    {
        label: 'Insect Glaives',
        value: 'insect_glaives',
    },
    {
        label: 'Light Bowguns',
        value: 'light_bowguns',
    },
    {
        label: 'Heavy Bowguns',
        value: 'heavy_bowguns',
    },
    {
        label: 'Bows',
        value: 'bows',
    }
]
class Weapon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weapons: [],
            great_swords: [],
            long_swords: [],
            sword_and_shields: [],
            dual_blades: [],
            hammers: [],
            hunting_horns: [],
            lances: [],
            gunlances: [],
            switch_axes: [],
            charge_blades: [],
            insect_glaives: [],
            light_bowguns: [],
            heavy_bowguns: [],
            bows: [],
            listOptions: WEAPONLISTTYPES,
            selectedOption: null,
            selectedWeaponType: null,
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch("https://mhw-db.com/weapons")
            .then(results => {
                return results.json();
            }).then(data => {
                let great_swords = [];
                let long_swords = [];
                let sword_and_shields = [];
                let dual_blades = [];
                let hammers = [];
                let hunting_horns = [];
                let lances = [];
                let gunlances = [];
                let switch_axes = [];
                let charge_blades = [];
                let insect_glaives = [];
                let light_bowguns = [];
                let heavy_bowguns = [];
                let bows = [];

                let weapons = data.map((weapon) => {
                    switch (weapon.type) {
                        case 'great-sword':
                            great_swords.push(weapon);
                            break;
                        case 'long-sword':
                            long_swords.push(weapon);
                            break;
                        case 'sword-and-shield':
                            sword_and_shields.push(weapon);
                            break;
                        case 'dual-blades':
                            dual_blades.push(weapon);
                            break;
                        case 'hammer':
                            hammers.push(weapon);
                            break;
                        case 'hunting-horn':
                            hunting_horns.push(weapon);
                            break;
                        case 'lance':
                            lances.push(weapon);
                            break;
                        case 'gunlance':
                            gunlances.push(weapon);
                            break;
                        case 'switch-axe':
                            switch_axes.push(weapon);
                            break;
                        case 'charge-blade':
                            charge_blades.push(weapon);
                            break;
                        case 'insect-glaive':
                            insect_glaives.push(weapon);
                            break;
                        case 'light-bowgun':
                            light_bowguns.push(weapon);
                            break;
                        case 'heavy-bowgun':
                            heavy_bowguns.push(weapon);
                            break;
                        case 'bow':
                            bows.push(weapon);
                            break;
                        default:
                            console.log("uncategorized weapon:", weapon)
                            break;
                    }

                    return (
                        weapon
                    )
                })
                this.setState({ weapons: weapons });
                this.setState({ great_swords: great_swords });
                this.setState({ long_swords: long_swords });
                this.setState({ sword_and_shields: sword_and_shields });
                this.setState({ dual_blades: dual_blades });
                this.setState({ hammers: hammers });
                this.setState({ hunting_horns: hunting_horns });
                this.setState({ lances: lances });
                this.setState({ gunlances: gunlances });
                this.setState({ switch_axes: switch_axes });
                this.setState({ charge_blades: charge_blades });
                this.setState({ insect_glaives: insect_glaives });
                this.setState({ light_bowguns: light_bowguns });
                this.setState({ heavy_bowguns: heavy_bowguns });
                this.setState({ bows: bows });
                this.setState({ isLoading: false });
                // console.log("weapons", this.state.great_swords);
            })
    }

    handleChange = (selectedOption, clear) => {
        this.setState({ selectedOption });
        if (selectedOption !== null && selectedOption !== undefined) {
            // console.log("selectedOption: ", selectedOption);
            let selectedWeaponType = this.state[selectedOption.value];
            this.setState({ selectedWeaponType: selectedWeaponType })
            // console.log("state should have been set with: ", selectedWeaponType);
        } else {
            this.setState({ selectedWeaponType: selectedOption });
        }
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading Weapons...</div>
        }

        if(this.state.selectedOption != null && this.state.selectedWeaponType != null){
            return (
                <div>
                    <div style={{ width: '250px' }}>
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
                        <WeaponPiece weapon={this.state.selectedWeaponType} />
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div style={{ width: '250px' }}>
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
                </div>
            )
        }
    }
}

export default Weapon