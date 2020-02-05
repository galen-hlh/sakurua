import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Detail from './components/detail/detail';
import Login from './components/login/login';


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail/:id" component={Detail}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;