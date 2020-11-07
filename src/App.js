import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './css/styles.css'
import Card from './components/molecules/Card';
import Header from './components/organisms/Header';
import HomePage from './components/templates/HomePage'
import NameForm from './components/templates/NameForm';
import PackageIdForm from './components/templates/PackageIdForm';
import MyPackages from './components/templates/MyPackages';
import PackagePage from './components/templates/PackagePage';

import data from './orders.json';

function App() {
  return (
    <div className="App">
    <Router>
        <Header />
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
            exact
            render = {
              ({match}) => <MyPackages match = {match} data = {data}/>
            }
          />
          <Route
            path = "/package/:id"
            exact
            render = {
              ({match}) => <PackagePage match = {match} data = {data}/>
            }
          />
        </Switch>
        </Router>
      </div>
    
  );
}

export default App;
