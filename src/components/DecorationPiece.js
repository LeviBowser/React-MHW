import React, { Component, Fragment } from 'react';
// https://github.com/JedWatson/react-select
import Select from 'react-select'

const RESISTANCES = ['Dragon', 'Fire', 'Ice', 'Thunder', 'Water'];

class DecorationPiece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decorationPieces: props.decorations,
            listOptions: [],
            selectedOption: null,
            selectedDecoration: null
        };
    }

    componentDidMount() {
        let listOptions = [];

        this.state.decorationPieces.map((decoration) => {

            let tmpdecorationItem = {
                label: decoration.name,
                value: decoration.id,
            }
            listOptions.push(tmpdecorationItem)
        })
        this.setState({ listOptions: listOptions });
    }

    handleChange = (selectedOption, clear) => {
        this.setState({ selectedOption });
        if (selectedOption !== null && selectedOption !== undefined) {
            let foundDecoration = this.state.decorationPieces.find(function (decoration) {
                return decoration.name === selectedOption.label && decoration.id === selectedOption.value;
            });
            this.setState({ selectedDecoration: foundDecoration })
            // console.log(foundDecoration);
        } else {
            this.setState({ selectedDecoration: selectedOption });
        }
    }

    displaySkills = (skillsArray) => {
        let skills = [];
        skillsArray.forEach(function (skill) {
            skills.push(
                <li key={skill.id}>
                    {skill.skillName} lvl {skill.level} - {skill.description}
                </li>
            )
        });

        return (
            <ul>{skills}</ul>
        )
    }


    render() {
        if (this.state.selectedDecoration !== null && this.state.selectedDecoration !== undefined) {
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
                        Decoration Name: {this.state.selectedDecoration.name}<br />
                        Decoration Rank: {this.state.selectedDecoration.rank}<br />
                        Decoration Rarity: {this.state.selectedDecoration.rarity}<br />
                        Jewel Slot lvl required: {this.state.selectedDecoration.slot}<br />
                        {this.displaySkills(this.state.selectedDecoration.skills)}<br />
                    </div>
                </div>
            )
        } else {
            return (
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
            )
        }
    }
}

export default DecorationPiece