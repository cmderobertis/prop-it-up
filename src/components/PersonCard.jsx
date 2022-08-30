import React, { Component } from 'react'
import BirthdayButton from './BirthdayButton'

class PersonCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: this.props.age
    }
  }

  incrementAge = () => this.setState({age: this.state.age + 1})

  render() {
    const { firstName, lastName, hairColor } = this.props
    return (
      <div>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <BirthdayButton firstName={firstName} incrementAge={this.incrementAge}/>
      </div>
    )
  }
}

export default PersonCard