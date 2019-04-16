import React, { Component } from 'react';
import CharmPiece from './CharmPiece';

// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Charm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charms: [],
            isLoading: true
        };
    }

    componentDidMount() {
        fetch("https://mhw-db.com/charms")
            .then(results => {
                return results.json();
            }).then(data => {
                let charms = data.map((charm) => {
                    return (
                        charm
                    )
                })
                this.setState({ charms: charms });
                this.setState({ isLoading: false });
                // console.log("charm", this.state.charms);
            })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading Charms...</div>
        }

        return (
            <div>
                <CharmPiece charms={this.state.charms} />
            </div>
        )
    }
}

export default Charm