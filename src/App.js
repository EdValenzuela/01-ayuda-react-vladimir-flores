import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
//Importamos los Context
import PokemonContextProvider from './contexts/PokemonContexts';
import PokemonDetailContextProvider from './contexts/PokemonDetailContext';

//importamos los componentes
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import PokemonsHome from './components/pokemon';
import PokemonDetail from './components/pokemon-detail';
import NotFound from './components/notfound/notfound.jsx';
//import PokemonList from './components/pokemon/pokemon-list';
import SignIn from './components/sign-in/sign-in';
//Se llama al Boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

const App = () => (
  <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/pokemonlist">  {/* se aplica el patron de diseño HOC  */}
        <PokemonContextProvider>
          <PokemonsHome /> 
        </PokemonContextProvider>
      </Route>
      <Route path="/pokemon/:code">
        <PokemonDetailContextProvider>
          <PokemonDetail />
        </PokemonDetailContextProvider>
      </Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/login" component={SignIn}></Route>
      <Route component={NotFound} ></Route>
    </Switch>
    <Footer></Footer>
  </BrowserRouter>
);

export default App;
