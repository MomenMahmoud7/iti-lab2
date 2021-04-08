import React from 'react';
import useAxiosPromise from '../../hooks/useAxiosPromise';
import List from '../../components/List/List';

const Users = () => {
  const { loading, error, data } = useAxiosPromise(`/users?q=react`);
  return <List error={error} loading={loading} data={data} />;
};

export default Users;
