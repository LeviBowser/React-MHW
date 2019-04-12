import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Charm extends Component {
    constructor() {
        super();
        this.state = {
            charms: [],
        };
    }

    componentDidMount() {
        fetch("https://mhw-db.com/charms")
            .then(results => {
                return results.json();
            }).then(data => {
                let charms = data.map((charm) => {
                    return (
                        <li _charmid={charm.id} id={charm.slug} key={charm.id}>
                            {charm.name}{charm.type}
                        </li>
                    )
                })
                this.setState({ charms: charms });
                console.log("charm", this.state.charms);
            })
    }

    render() {
        return (
            <List style={{ maxHeight: '200px', overflow: 'auto' }}>
                {this.state.charms}
            </List>
            
        )
    }
}

export default Charm