import React from 'react';
import './Card.css';
import ReposList from './ReposList';
import Axios from 'axios';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      repos: []
    }
    console.log(this.props);
  }

  async componentDidMount(){
    // Axios.get('https://api.github.com/users/keshav143420')
    const resp = await Axios.get(`https://api.github.com/users/${this.props.login}/repos`);
    // this.props.onSubmit(resp.data);
    this.setState(()=>({
      repos: resp.data
    }))
  }
  
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
        <ReposList repos={this.state.repos.slice(0,3)}/>
      </div>
    );
  }
}

export default Card;