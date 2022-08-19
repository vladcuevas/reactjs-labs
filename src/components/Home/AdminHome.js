import React, { useState } from "react";
import "./Home.css"
import "./AdminHome.css"
import AdminProduct from '../Product/AdminProduct'
import CreateProduct from "../Product/CreateProduct";
import UpdateProduct from "../Product/UpdateProduct";
import StockReport from "../../components/Admin/Reports/Stock"
import SellsReport from "../../components/Admin/Reports/Sells"
import MedicinesReport from "../../components/Admin/Reports/ProductsReport"
import OrdersReport from "../../components/Admin/Reports/Orders"
import DateWiseReport from "../../components/Admin/Reports/DateWiseReport"
import CustomerInfo from "../../components/Admin/CustomerInfo/CustomerInfo"

import {
    Routes,
    Route,
} from "react-router-dom";
import Reports from "../Admin/Reports/Reports";

function AdminHome() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <div>
                        <Routes>
                            <Route path="/" element={<AdminProduct rowsPerPage={4} />} />
                            <Route path="/create/medicine" element={<CreateProduct />} />
                            <Route path="/update/medicine" element={<UpdateProduct />} />
                            <Route path="/reports/*" element={<Reports />} />
                            <Route path="/reports/stockreport" element={<StockReport />} />
                            <Route path="/reports/sellsreport" element={<SellsReport />} />
                            <Route path="/reports/productsreport" element={<MedicinesReport />} />
                            <Route path="/reports/ordersreport" element={<OrdersReport />} />
                            <Route path="/reports/datewisereport" element={<DateWiseReport />} />
                            <Route path="/customerinfo" element={<CustomerInfo />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome