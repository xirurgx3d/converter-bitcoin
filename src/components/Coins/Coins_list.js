import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ValuteBody = ({name,fullname,img,price,change,oldprice = undefined,chg = undefined}) => (
  <TableRow>
    
    <TableCell align="right">{name}</TableCell>
    <TableCell align="right">{fullname} </TableCell>
    <TableCell align="right">{price } | {oldprice && oldprice}</TableCell>
    <TableCell className={oldprice && chg} align="right">{change}</TableCell>
  </TableRow>
)
export default ValuteBody