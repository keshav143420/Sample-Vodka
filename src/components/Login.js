import React from 'react';

import * as ROUTES from '../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  failed: {
    count: 0,
    message: ''
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    if (email === 'admin' && password === 'admin') {
      this.props.history.push(ROUTES.LANDING);
    } else {
      this.setState((state) => ({
        error: { message: `email and password combinations are wrong` },
        failed: { count: state.failed.count + 1}
      }))
      console.log(this.state);
    }
    if (this.state.failed.count >= 3){
      this.setState((state) => ({
        error: { message: `${this.state.failed.count} failed login attemp` }
      }))
    }

  };

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, password, error, failed } = this.state;
    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} ref="login" type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
        {failed.count !== 0 && <p>{failed.message}</p>}
      </form>
    );
  }
}

export default Login;