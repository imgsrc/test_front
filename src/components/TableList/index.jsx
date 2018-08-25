import React from 'react'
import Table from '@material-ui/core/Table'

import './index.css'

export default function TableList() {
  return (
      <Table className="table">
        <thead className="table-head">
        <tr>
          <th className="table-head__item">Price</th>
          <th className="table-head__item">Id</th>
          <th className="table-head__item">From/Until</th>
          <th className="table-head__item">Passengers</th>
        </tr>
        </thead>

        <tbody className="table-body">
        <tr>
          <td className="table-body__item"></td>
          <td className="table-body__item"></td>
          <td className="table-body__item"></td>
          <td className="table-body__item"></td>
        </tr>
        </tbody>
      </Table>
  );
}