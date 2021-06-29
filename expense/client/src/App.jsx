import React from 'react';
import { BrowerRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import RestaurantPage from './routes/RestaurantPage';
import Update from './routes/Update';

const App = () => {
    return <div>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/restaurants/:id/update" component={Update}/>
                <Route exact path="/restaurants/:id" component={RestaurantPage}/>

            </Switch>
        </Router>
        
    </div>
}

export default App;