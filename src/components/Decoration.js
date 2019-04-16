import React, { Component } from 'react';
import DecorationPiece from './DecorationPiece'
// https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
class Decoration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decorations: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        fetch("https://mhw-db.com/decorations")
            .then(results => {
                return results.json();
            }).then(data => {
                let decorations = data.map((decoration) => {
                    return (
                        decoration
                    )
                })
                this.setState({ decorations: decorations });
                this.setState({ isLoading: false});
                // console.log("decorations", this.state.decorations);
            })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading Decorations...</div>
        }

        return (
            // <List style={{ maxHeight: '200px', overflow: 'auto' }}>
            //     {this.state.decorations}
            // </List>

            <div>
                <DecorationPiece decorations={this.state.decorations} />
            </div>
            
        )
    }
}

export default Decoration