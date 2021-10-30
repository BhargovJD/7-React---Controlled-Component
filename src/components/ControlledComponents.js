import React, { Component } from 'react'

export default class ControlledComponents extends Component {

    constructor(props) {
        super(props)

        this.state = {
             name:"BHARGOV",
        }
    }

    changeHandler = (e) => {
        const name = e.target.value;
        this.setState({name})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.name} onChange={this.changeHandler} />
                </form>
            </div>
        )
    }
}
