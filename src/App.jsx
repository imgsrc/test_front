import React from 'react'

import './App.css'
import TableList from './components/TableList'
import Header from './components/Header'

export default function App() {
  return (
      <div className="app">
        <Header/>
        <TableList/>
      </div>
  );
}