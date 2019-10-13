import React from 'react';
import Axios from 'axios';

class Form extends React.Component {
  state = {
    userName: ''
  }
  usernameInput = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault();
    // Axios.get('https://api.github.com/users/keshav143420')
    const resp = await Axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState(()=>({
      userName: ''
    }))
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Github username"
            value={this.state.userName}
            onChange={(event)=>this.setState({userName:event.target.value})}
            required/>
          <button>Add Card</button>
        </form>
      </div>
    );
  }
}
export default Form;