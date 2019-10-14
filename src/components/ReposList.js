import React from 'react';
import Repo from './Repo';

const RepoList = (props) => {
    return(
      <div>
        <h3>Repos</h3>
          {props.repos.map(repo => <Repo {...repo} key={repo.id} />)}
      </div>
    );
}

export default RepoList;