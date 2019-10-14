import React from 'react'
import * as ROUTES from '../constants/routes';
import {
  Route,
} from 'react-router-dom';
import Login from './Login';
class MobileVIew extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoginClicked: false
    }
  }
  handleClick = (event) => {
    event.preventDefault();
    // this.props.history.push(ROUTES.LOGIN);
    this.setState({
      isLoginClicked:true
    })
  }
  render() {
    return (
      <div>
        { this.state.isLoginClicked ? <Route exact path={ROUTES.LOGIN} component={Login} /> : <button onClick={this.handleClick}>Login</button> }
      </div>
    );
  }
}

export default MobileVIew;