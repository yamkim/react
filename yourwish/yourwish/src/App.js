import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import HandleSnsLogin from './apis/HandleSnsLogin';

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
                <Route exact path='/main' component={MainPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
