import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './components/App/App';

class Routes extends React.Component {
    render() {
        return (
            <Router >
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;