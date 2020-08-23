import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Shipping, Billing, Payment, ThanksPage, Cart } from './components';
import { UserContext } from './components/Shipping/UserContext';

const App = () => {
    const [quantity, setQuantity] = useState(0);

    return (
        <Router>
            <div>
                <UserContext.Provider value={{quantity, setQuantity}}>
                    <Cart/>
                    <Switch>
                        <Route path='/' exact component={Shipping}/>
                        <Route path='/billing' component={Billing}/>
                        <Route path='/payment' component={Payment}/>
                        <Route path='/print' component={ThanksPage}/>
                  </Switch>
              </UserContext.Provider>
          </div>
      </Router>
  );
};

export default App;
