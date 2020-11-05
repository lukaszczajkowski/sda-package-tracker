import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './css/App.css';
import Card from './components/molecules/Card';
import Header from './components/organisms/Header';
import HomePage from './components/templates/HomePage'
import NameForm from './components/templates/NameForm';
import PackageIdForm from './components/templates/PackageIdForm';
import MyPackages from './components/templates/MyPackages';

import data from './orders.json';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            path = "/"
            exact
            component = {HomePage}
          />
          <Route
            path = "/nameform"
            exact
            render = {
              () => <NameForm/>
            }
          />
          <Route
            path = "/packageidform"
            render = {
              () => <PackageIdForm/>
            }
          />
          <Route
            path = "/mypackages/:query"
            render = {
              ({match}) => <MyPackages match = {match} data = {data}/>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
