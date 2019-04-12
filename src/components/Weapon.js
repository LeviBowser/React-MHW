import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Weapon extends Component {
    constructor() {
        super();
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
                            console.log(weapon)
                            break;
                    }

                    return (
                        <li _weaponid={weapon.id} id={weapon.slug} key={weapon.id}>
                            {weapon.name}
                        </li>
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

                console.log("weapons", this.state.weapons);
            })
    }

    render() {
        return (
            <List style={{ maxHeight: '200px', overflow: 'auto' }}>
                {this.state.weapons}
            </List>
            
        )
    }
}

export default Weapon