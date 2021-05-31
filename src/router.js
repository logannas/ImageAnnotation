import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home/index';
import Classification from './components/Classification/index';
import Segmentation from './components/Segmentation/index'

function Routes(){
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Classification} path="/classification" />
            <Route component={Segmentation} path="/segmentation"/>
        </BrowserRouter>
    );
}

export default Routes;