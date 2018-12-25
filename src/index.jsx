import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, Link} from 'react-router';

import App from './components/App';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import './index.less';

class Index extends React.Component {
    render() {
        return (
            <div className="body">
                <h1>Pages list</h1>
                <ul role="nav">
                    <li><Link to="/p1">Page1</Link></li>
                    <li><Link to="/p2">Page2</Link></li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="p1" component={Page1}/>
            <Route path="p2" component={Page2}/>
        </Route>
    </Router>
    , document.getElementById('app'));
