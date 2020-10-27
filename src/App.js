import React from 'react'
import Axios from 'axios'
import Card from './components/Card'



class App extends React.Component {
  constructor() {
    super();

    const defaultUsers =  ['kai-blt', 'schroeder-g', 'ETBassist', 'kpace622'];

    this.state = {
      search_value: '',
      user_names: defaultUsers,
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

  //Get Search Data
  getSearchData = () => {
      Axios.all([Axios.get(`${this.state.baseUrl}${this.state.search_value}`), Axios.get(`${this.state.baseUrl}${this.state.search_value}/followers`)])
      .then(Axios.spread((...res) => {
        const userData = res[0].data;
        const followersData = res[1].data;
        // console.log(data);
        this.setState({user_data: [...this.state.user_data, userData]})
        this.setState({followers_data: [...this.state.followers_data, followersData]})
        console.log(this.state)
      }))
      .catch(err => console.log(err.errors));
    }    
  


 
  //After component mounts, get User Data
  componentDidMount() {
    this.getUserData();
  }


  //After component updates, get User Data
  // componentDidUpdate() {
  //   if (this.state.search_value.length > 0) {
  //     this.setState({user_names: this.defaultUsers})
  //   } 
  // }

  //Handlers
  handleChange = (e) => {
    this.setState({search_value: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchData()
  }


  render() {
    return(
      <>
        <h1>GitHub User Fetch API</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.search_value} onChange={this.handleChange}/>
          </label>
          <button>Search Users</button>
        </form>

        { this.state.search_value === ''
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
            : this.state.user_data.filter(user => user.login === this.state.search_value).map((user, index) => 
              <Card key={user.id}
                login={user.login}
                html_url={user.html_url}
                avatar_url={user.avatar_url}   
                location={user.location}
                followers={user.followers}
                following={user.following}
                followersData={this.state.followers_data[index]}
              />)
        }
      </>
    )
  }
}


export default App;
