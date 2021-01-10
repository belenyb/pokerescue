import React from 'react';
//import { getFirestore } from './firebase/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import CartContainer from './containers/CartContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContext from './context/cartContext';


function App() {
  return (
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' render={() => <Home greeting='¡Hola! Bienvenido a Poke Rescue' /> } />
            <Route path='/cart' render={() => <CartContainer />} />
            <Route path='/item/:id' render={() => <ItemDetailContainer />} />
          </Switch>
        </BrowserRouter>
      </CartContext>
    </div> 
    
  );
}

export default App;
