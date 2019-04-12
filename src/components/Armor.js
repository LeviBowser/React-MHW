import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Armor extends Component {
    constructor() {
        super();
        this.state = {
            armors: [],
            heads: [],
            gloves: [],
            chests: [],
            waists: [],
            legs: [],
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
                    <ListItem _armorid={armor.id} id={armor.slug} key={armor.id}>
                        {armor.name}
                    </ListItem>
                )
            })
            this.setState({ armors: armors });
            this.setState({ heads: heads });
            this.setState({ gloves: gloves });
            this.setState({ chests: chests });
            this.setState({ waists: waists });
            this.setState({ legs: legs });
        })
    }

    render(){
        return (
            // https://material-ui.com/demos/lists/
            <List style={{ maxHeight: '200px', overflow: 'auto' }}>
                {this.state.armors}
            </List>
        )
    }
}

export default Armor