import React, { useReducer } from 'react';
import axios from 'axios';
import List from '../../components/List/List';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Search.css';
const Search = () => {
  const reducer = (prev, next) => ({ ...prev, ...next });

  const [
    { loading, error, data, searchText, searchType },
    setState,
  ] = useReducer(reducer, {
    data: [],
    loading: false,
    error: '',
    searchText: '',
    searchType: '',
  });

  const onInputChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setState({ [inputName]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setState({ loading: true });
    try {
      const response = await axios
        .get(`https://api.github.com/${searchType}?q=${searchText}`)
        .then((response) => response.data);

      setState({ data: response, loading: false });
    } catch (error) {
      setState({ error: 'Something went wrong', loading: false });
    }
  };

  return (
    <div>
      <form className="search-form">
        <input
          name="searchText"
          placeholder="Insert Search Text"
          type="text"
          onChange={onInputChange}
          value={searchText}
        />
        <input
          name="searchType"
          placeholder="Insert Search Type"
          type="text"
          onChange={onInputChange}
          value={searchType}
        />
        <Button type="primary" icon={<SearchOutlined />} onClick={onSubmit}>
          Search
        </Button>
      </form>
      <List loading={loading} error={error} data={data} />
    </div>
  );
};

export default Search;
