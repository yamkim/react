import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import HandleSnsLogin from './apis/HandleSnsLogin';
import PrivateRoute from './components/PrivateRoute';
import RenewTokens from './apis/RenewToken';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route exact path='/login' component={LoginPage}/>
                <Route
                    exact path="/callback/kakao"
                    component={() => {
                        return <HandleSnsLogin sns={'kakao'}/>;
                    }}/>;
                <PrivateRoute exact path='/main' component={MainPage}/>
                <PrivateRoute exact path="/auths/token/refresh" component={RenewTokens}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
