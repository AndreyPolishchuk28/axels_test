import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {Shipping} from "./components/Shipping/ShippingInfo/ShippingInfo";
import {Billing} from "./components/Shipping/Billing/Billing";
import {Payment} from "./components/Shipping/Payment/Payment";
import {ThanksPage} from "./components/Shipping/ThanksPage/ThanksPage";
import {store} from "./components/store/reducers";


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
