import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

export default function TableList() {
  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>Id</TableCell>
            <TableCell>From/Until</TableCell>
            <TableCell>Passengers</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>123</TableCell>
            <TableCell>456</TableCell>
            <TableCell>789</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  );
}