import React, { Component } from 'react';


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
            <ol>{this.state.decorations}</ol>
        )
    }
}

export default Decoration