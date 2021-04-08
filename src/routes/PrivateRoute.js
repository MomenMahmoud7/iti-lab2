import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Global } from '../contexts/Global';

const PrivateRoute = ({ path, component }) => {
  const { user } = useContext(Global);

  if (user.username || localStorage.username)
    return <Route path={path} component={component} />;
  return <Redirect to="/login" />;
};

export default PrivateRoute;
