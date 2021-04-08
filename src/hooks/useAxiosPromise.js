import { useEffect, useReducer } from 'react';
import axiosInstance from '../api/axiosInstance';

const useAxiosPromise = (url) => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  const [{ loading, error, data }, setState] = useReducer(reducer, {
    data: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance
          .get(url)
          .then((response) => response.data);

        setState({ data: response, loading: false });
      } catch (error) {
        setState({ error: 'Something went wrong', loading: false });
      }
    };
    fetchData();
  }, [url]);
  return { loading, error, data };
};
export default useAxiosPromise;
