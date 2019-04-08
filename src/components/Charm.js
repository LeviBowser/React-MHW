import React, { Component } from 'react';


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
            <ol>{this.state.charms}</ol>
        )
    }
}

export default Charm