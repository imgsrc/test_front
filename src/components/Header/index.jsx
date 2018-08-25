import React from 'react'

import 'material-components-web/dist/material-components-web.css';
import './index.css'

export default function Header() {
  return (
      <header className="header-table">
        <h1 className="header-table__title">Requests</h1>
        <button className="mdc-button">Add new</button>
      </header>
  );
}