import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import data from './db'
import RequestsList from './pages/RequestsList'
import CreateRequest from './pages/CreateRequest'

import './App.css'

export default function App() {
  return (
      <Router>
        <div className="app">
          <Route exact path="/" component={RequestsList}/>
          <Route path="/create" component={CreateRequest}/>
        </div>
      </Router>
  );
}