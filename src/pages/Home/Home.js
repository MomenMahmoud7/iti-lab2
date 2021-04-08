import axios from 'axios';
import { useEffect, useReducer } from 'react';
import List from '../../components/List/List';

const Home = () => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  const [{ loading, error, data }, setState] = useReducer(reducer, {
    data: [],
    loading: true,
    error: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`https://api.github.com/repositories?q=react`)
          .then((response) => response.data);

        setState({ data: response, loading: false });
      } catch (error) {
        setState({ error: 'Something went wrong', loading: false });
      }
    };
    fetchData();
  }, []);

  return <List error={error} loading={loading} data={data} />;
};

export default Home;
