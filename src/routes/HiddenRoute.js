import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Global } from '../contexts/Global';

const HiddenRoute = ({ path, component }) => {
  const { user } = useContext(Global);

  if (!user.username && !localStorage.username)
    return <Route exact path={path} component={component} />;
  return <Redirect to="/" />;
};

export default HiddenRoute;
