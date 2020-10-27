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

  getUsers = () => {
    this.state.user_names.forEach(user => {
      Axios.get(`${this.state.baseUrl}${user}`)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({user_data: [...this.state.user_data, data]})
        console.log(this.state)
      })
      .catch(err => console.log(err.errors));
    })    
  }

  componentDidMount() {
    this.getUsers();
    console.log(this.state.user_data)
  }

  
  render() {
    return(
      <>
        <h1>GitHub User Fetch API</h1>
        { this.state.user_data
            ? this.state.user_data.map(user => 
              <Card key={user.id}
                login={user.login}
                html_url={user.html_url}
                avatar_url={user.avatar_url}   
                location={user.location}
                followers={user.followers}
                following={user.following}             
              />
            )
            : 'NO DATA' 
        }
      </>
    )
  }
}


export default App;
