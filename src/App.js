import React from 'react'
import Axios from 'axios'
import Card from './components/Card'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_names: ['kai-blt', 'schroeder-g', 'ETBassist', 'kpace622'],
      user_data: [],
      followers_data: [],
      baseUrl: 'https://api.github.com/users/'
    }    
  }

  //Chaining Axios Gets with Axios.all!
  getUserData = () => {
    this.state.user_names.forEach(user => {
      Axios.all([Axios.get(`${this.state.baseUrl}${user}`), Axios.get(`${this.state.baseUrl}${user}/followers`)])
      .then(Axios.spread((...res) => {
        const userData = res[0].data;
        const followersData = res[1].data;
        // console.log(data);
        this.setState({user_data: [...this.state.user_data, userData]})
        this.setState({followers_data: [...this.state.followers_data, followersData]})
        console.log(this.state)
      }))
      .catch(err => console.log(err.errors));
    })    
  }

 
  //After component mounts, get User Data
  componentDidMount() {
    this.getUserData();
  }

  
  render() {
    return(
      <>
        <h1>GitHub User Fetch API</h1>
        { this.state.user_data
            ? this.state.user_data.map((user, index) => 
              <Card key={user.id}
                login={user.login}
                html_url={user.html_url}
                avatar_url={user.avatar_url}   
                location={user.location}
                followers={user.followers}
                following={user.following}
                followersData={this.state.followers_data[index]}
              />
            )
            : 'NO DATA' 
        }
      </>
    )
  }
}


export default App;
