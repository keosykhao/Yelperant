import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './routes/Home';
import RestaurantPage from './routes/RestaurantPage';
import Update from './routes/Update';
import { RestaurantContextProvider } from './context/RestaurantContext';

const App = () => {
    return(
        <RestaurantContextProvider>
         <div className="container">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/restaurants/:id/update" component={Update}/>
                <Route exact path="/restaurants/:id" component={RestaurantPage}/>

            </Switch>
        </Router>
    </div>
    </RestaurantContextProvider>
    );
}

export default App;