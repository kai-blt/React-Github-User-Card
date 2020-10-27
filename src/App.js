import React from 'react'

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    console.log('hi')
  }

  render() {
    return(
      <h1>Hello</h1>
    )
  }
}


export default App;
