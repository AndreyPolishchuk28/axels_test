import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Shipping, Billing, Payment, ThanksPage} from "./components";
import {store} from "./redux/reducers";

function App() {
  return (
      <Provider store={store}>
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
      </Provider>
  );
}

export default App;
