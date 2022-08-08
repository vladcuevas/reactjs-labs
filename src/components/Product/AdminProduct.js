import React, { useState } from "react";
import useTable from "../../hooks/useTable";
import styles from './AdminProduct.module.css'
import TableFooter from "../TableFooter";

import { useStateValue } from "../../StateProvider";

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

import productData from '../../data/products'

import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function AdminProduct({rowsPerPage}) {
  const [ state, dispatch ] = useStateValue()
  const [ products ] = useState([...productData]);

  let data = products

  const [ page, setPage ] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <div className="product">
      <div className="product__info">
        <table className={styles.table}>
          <thead className={styles.tableRowHeader}>
            <tr>
              <th className={styles.tableHeader}></th>
              <th className={styles.tableHeader}>Title</th>
              <th className={styles.tableHeader}>Price</th>
              <th className={styles.tableHeader}>Rating</th>
              <th className={styles.tableHeader}>Image</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((el) => (
              <tr className={styles.tableRowItems} key={el.id}>
                <td className={styles.tableCell}>
                  <EditIcon className={styles.button}>Update</EditIcon><DeleteForeverIcon className={styles.button}>Delete</DeleteForeverIcon>
                </td>
                <td className={styles.tableCell}>{el.title}</td>
                <td className={styles.tableCell}><small>$</small>{el.price}</td>
                <td className={styles.tableCell}>{el.rating}</td>
                <td className={styles.tableCell}>{el.image}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
      </div>
    </div>
  )
}

export default AdminProduct