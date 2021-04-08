import { useContext, useEffect, useReducer } from 'react';
import { useHistory } from 'react-router';
import { Global } from '../../contexts/Global';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import 'antd/lib/button/style/index.css';
import './Login.css';

const Login = () => {
  const reducer = (prev, next) => ({ ...prev, ...next });
  const { user, setUser } = useContext(Global);
  useEffect(() => {
    console.log(user);
  }, [user]);
  const history = useHistory();
  console.log(history);
  const [{ username, password, error }, setState] = useReducer(reducer, {
    username: '',
    password: '',
  });

  const onInputChange = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setState({ [inputName]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === 'momen' && password === '1234') {
      setUser({ username, password });
      localStorage.setItem('username', username);
      setState({ username: '', password: '' });
      history.push('/');
      return;
    }
    setState({ error: 'Username or password is not valid' });
  };

  return (
    <form className="login-container">
      <input
        name="username"
        placeholder="Username"
        type="text"
        onChange={onInputChange}
        value={username}
      />
      <input
        name="password"
        placeholder="Password"
        type="text"
        onChange={onInputChange}
        value={password}
      />
      <Button type="primary" icon={<LoginOutlined />} onClick={onSubmit}>
        Login
      </Button>
      <h3>{error}</h3>
    </form>
  );
};
export default Login;
