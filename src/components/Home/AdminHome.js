import React, { useState } from "react";
import "./Home.css"
import "./AdminHome.css"
import AdminProduct from '../Product/AdminProduct'
import productData from '../../data/products'

import Table from "../../components/Table";

function AdminHome() {
    let Product = AdminProduct
    
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <div>
                        <Table rowsPerPage={4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome