import React from 'react'
import {Link} from 'react-router-dom'

import 'material-components-web/dist/material-components-web.css';
import './index.css'

export default function Header() {
  return (
      <header className="header-table">
        <h1>Requests</h1>
        <Link to="/create" className="mdc-button">Add new</Link>
      </header>
  );
}