import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Shipping, Billing, Payment, ThanksPage } from './components';

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
