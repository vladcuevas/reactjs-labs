import React, { useState } from "react";
import "./Home.css"
import "./AdminHome.css"
import AdminProduct from '../Product/AdminProduct'
import CreateProduct from "../Product/CreateProduct";

import {
    Routes,
    Route,
} from "react-router-dom";

function AdminHome() {
    return (
        <div>
            <div className="home">
                <div className="home__container">
                    <div>
                        <Routes>
                            <Route path="/" element={<AdminProduct rowsPerPage={4} />} />
                            <Route path="/create/medicine" element={<CreateProduct />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome