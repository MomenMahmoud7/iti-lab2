import List from '../../components/List/List';
import useAxiosPromise from '../../hooks/useAxiosPromise';

const Home = () => {
  const { loading, error, data } = useAxiosPromise(`/repositories?q=react`);
  return <List error={error} loading={loading} data={data} />;
};

export default Home;
