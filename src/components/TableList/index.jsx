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
          <td className="table-body__item">100$</td>
          <td className="table-body__item">req-12311</td>
          <td className="table-body__item">2018-08-20 - 2018-09-01</td>
          <td className="table-body__item">2</td>
        </tr>
        <tr>
          <td className="table-body__item">124$</td>
          <td className="table-body__item">req-12312</td>
          <td className="table-body__item">2018-08-20 - 2018-09-01</td>
          <td className="table-body__item">3</td>
        </tr>
        </tbody>
      </Table>
  );
}