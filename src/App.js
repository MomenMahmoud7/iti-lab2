import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import PrivateRoute from './routes/PrivateRoute';
import HiddenRoute from './routes/HiddenRoute';
import Search from './pages/Search/Search';
import Layout from './components/Layout/Layout';
import { Switch } from 'react-router';
import Users from './pages/Users/Users';
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <HiddenRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/users" component={Users} />
        <PrivateRoute exact path="/search" component={Search} />
      </Switch>
    </Layout>
  );
}

export default App;
