// Inside App.js or your main component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registration} />
                <Route path="/records" component={RecordList} />
                <Route path="/records/:id" component={RecordDetails} />
                <Route path="/create" component={CreateRecord} />
            </Switch>
        </Router>
    );
}
