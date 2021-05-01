import Dashboard from './view/Dashboard';
import { Switch, Route } from 'react-router-dom';
import Mdf from './view/MDF';

function App() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} exact/>
      <Route path="/mdf" component={Mdf} />
    </Switch>
  );
}

export default App;
