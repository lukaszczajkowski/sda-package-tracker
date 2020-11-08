//React-router-dom imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Recoil import
import { RecoilRoot } from "recoil";

//CSS styling import
import "./css/styles.css";

//Components
import Header from "./components/organisms/Header";
import HomePage from "./components/templates/HomePage";
import NameForm from "./components/templates/NameForm";
import PackageIdForm from "./components/templates/PackageIdForm";
import MyPackages from "./components/templates/MyPackages";
import PackagePage from "./components/templates/PackagePage";

//File with data located in the src folder
import data from "./orders.json";

/**
 * The starting point of the program. 
 * Imports components and maps them with their route paths 
 * and passes the data props to the appropriate components.
 */
function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/nameform" exact render={() => <NameForm />} />
            <Route path="/packageidform" render={() => <PackageIdForm />} />
            <Route
              path="/mypackages/:query"
              exact
              render={({ match }) => <MyPackages match={match} data={data} />}
            />
            <Route
              path="/package/:id"
              exact
              render={({ match }) => <PackagePage match={match} data={data} />}
            />
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
