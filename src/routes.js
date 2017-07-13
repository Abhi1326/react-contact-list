/**
 * Created by Counter on 7/2/2017.
 */
import React from 'react'
import Home from "./components/Home/home";
import createBrowserHistory from "history/createBrowserHistory";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Add from './components/DetailFunction/contactAdd/contactadd'
const history = createBrowserHistory();
export default props => (
    <Router history={history}>
        <div>

            <Route path={'/'} exact component={Home}/>
            <Route path={'/add'} exact component={Add}/>


        </div>
    </Router>

)