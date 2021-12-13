import logo from './logo.svg';
import './App.css';
import JsChannelEx from './components/JsChannelEx';
import CreatePayment from './components/CreatePayment';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={JsChannelEx}/>
          {/* <Route exact path='/payment' component={CreatePayment}/> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
