import React, { Component, Fragment } from 'react';
// https://github.com/JedWatson/react-select
import Select from 'react-select'

const RESISTANCES = ['Dragon', 'Fire', 'Ice', 'Thunder', 'Water'];

class charmPiece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charmPieces: props.charms,
            listOptions: [],
            selectedOption: null,
            selectedCharm: null,
        };
    }

    componentDidMount() {
        let listOptions = [];

        this.state.charmPieces.map((charm) => {
            let tmpcharmItem = {
                label: charm.name,
                value: charm.id,
            }

            listOptions.push(tmpcharmItem)
        })

        this.setState({ listOptions: listOptions });
    }

    handleChange = (selectedOption, clear) => {
        this.setState({ selectedOption });
        if (selectedOption !== null && selectedOption !== undefined) {
            let foundcharm = this.state.charmPieces.find(function (charm) {
                return charm.name === selectedOption.label && charm.id === selectedOption.value;
            });
            this.setState({ selectedCharm: foundcharm })
            // console.log(foundcharm);
        } else {
            this.setState({ selectedCharm: selectedOption });
        }
    }

    displayRanks = (ranksArray, displaySkills) => {
        let ranks = ranksArray.map(function (rank) {
            // console.log(rank)
            let tmpKey = rank.name + "-" + rank.level;
            return (
                <li key={tmpKey}>
                    {rank.name}
                    {displaySkills(rank.skills)}
                </li>
            )
        })

        return (
            <ul>{ranks}</ul>
        )
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
        if (this.state.selectedCharm !== null && this.state.selectedCharm !== undefined) {
            return (
                <div style={{ width: '350px' }}>
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
                        Charm Name: {this.state.selectedCharm.name}<br />
                        Charm Ranks:<br />
                        {this.displayRanks(this.state.selectedCharm.ranks, this.displaySkills)}<br />
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ width: '250px' }}>
                    <Fragment>
                        <Select
                            // className="basic-single"
                            // classNamePrefix="select"
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

export default charmPiece