import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Decoration extends Component {
    constructor() {
        super();
        this.state = {
            decorations: [],
        };
    }

    componentDidMount() {
        fetch("https://mhw-db.com/decorations")
            .then(results => {
                return results.json();
            }).then(data => {
                let decorations = data.map((decoration) => {
                    return (
                        <li _decorationid={decoration.id} id={decoration.slug} key={decoration.id}>
                            {decoration.name}
                        </li>
                    )
                })
                this.setState({ decorations: decorations });
                console.log("decorations", this.state.decorations);
            })
    }

    render() {
        return (
            <List style={{ maxHeight: '200px', overflow: 'auto' }}>
                {this.state.decorations}
            </List>
            
        )
    }
}

export default Decoration