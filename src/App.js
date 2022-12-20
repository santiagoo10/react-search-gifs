import React, {useEffect, useState} from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import { Route } from "wouter"
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <h1>App</h1>
        <GifsContextProvider>
          <Route component={Home} path="/" />
          <Route component={SearchResults} path="/search/:keyword" />
          <Route component={Detail} path="/gif/:id" />
        </GifsContextProvider>

      </section>
    </div>
  );
}

export default App;
