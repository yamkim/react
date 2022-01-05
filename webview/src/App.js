import logo from './logo.svg';
import './App.css';
import FailurePage from './components/FailurePage';
import CompletePage from './components/CompletePage';
import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';
import PaymentPage from './pages/PaymentPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexPage}/>
          <Route exact path='/main' component={MainPage}/>
          <Route exact path='/payment' component={PaymentPage}/>
          {/* <Route exact path='/payment' component={CreatePayment}/> */}
          <Route exact path='/failure' component={FailurePage}/>
          <Route exact path='/complete' component={CompletePage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
