import React, { Component } from "react"

export default class BirthdayButton extends Component {
  render() {
    const { incrementAge, firstName } = this.props
    return <button onClick={incrementAge}>{firstName}'s birthday button</button>
  }
}
