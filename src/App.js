import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Shipping} from "./components/Shipping";
import {Billing} from "./components/Shipping/Billing/Billing";
import {Payment} from "./components/Shipping/Payment/Payment";
import {ThanksPage} from "./components/Shipping/ThanksPage/ThanksPage";


function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route path='/' exact component={Shipping}/>
                  <Route path='/billing' component={Billing}/>
                  <Route path='/payment' component={Payment}/>
                  <Route path='/print' component={ThanksPage}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
