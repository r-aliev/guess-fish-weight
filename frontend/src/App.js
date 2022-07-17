import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { SnackbarProvider } from 'notistack';

function App(){
    return (
      <div>
        <SnackbarProvider maxSnack={3}>
          <Header />
          <Home />
        </SnackbarProvider>
      </div>
    );
}

export default App;