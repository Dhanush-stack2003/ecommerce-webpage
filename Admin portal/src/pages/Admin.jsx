import React from 'react'
import { Routes, Route } from "react-router-dom";
import Addproduct from "../components/Addproduct/Addproduct";
import ListProduct from '../components/ListItem/ListProduct';
import classes from './Admin.module.css'
import Sidebar from '../components/Sidebar/Sidebar'

function Admin() {
  return (
    <div className={classes.admin}>
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin