import React from 'react'
import Axios from 'axios'
import Card from './components/Card'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_names: ['kai-blt', 'ETBassist', 'kpace622'],
      user_data: [],
      baseUrl: 'https://api.github.com/users/'
    }    
  }

  

  componentDidMount() {

    this.state.user_names.forEach(user => {
      Axios.get(`${this.state.baseUrl}${user}`)
      .then(res => {
        const data = res.data;
        // console.log(data);
        this.setState({user_data: [...this.state.user_data, data]})
        console.log(this.state)
      })
      .catch(err => console.log(err.errors));
    })    
    
    console.log(this.state.user_data)
  }

  
  render() {
    return(
      <>
        <h1>Hello</h1>
        { this.state.user_data
            ? this.state.user_data.map(user => <Card />)
            : 'NO DATA' 
        }
      </>
    )
  }
}


export default App;
