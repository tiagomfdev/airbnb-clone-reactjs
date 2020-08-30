import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//CSS
import './App.css'

//Pages ###################
import HomePage from './pages/Home'
import SearchPage from './pages/Search';


//Components ####################
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>

          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
