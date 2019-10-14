import React from 'react';
// import './Repo.css';


class Repo extends React.Component {
  render() {
    const repo = this.props;
    return (
      <div className="github-profile">
        <div className="info">
          <div className="name">{repo.name}</div>
          <div className="company">{ repo.description ? `${repo.description.slice(0,15)}...` : 'No Description'}</div>
        </div>
      </div>
    );
  }
}

export default Repo;