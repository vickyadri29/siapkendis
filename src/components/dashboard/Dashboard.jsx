import React from "react";
import { Link } from 'react-router-dom';

import './styles.css'

const Dashboard = () => {
    return (
        <div className="container">
            <header>
                <Link to={"/dashboard"}><h1>SIAPKENDIS</h1></Link>

                <ul className="nav-menu">
                    <Link className="link-nav" to={'/dashboard'}><li className="dashboard">Dashboard</li></Link>
                    <li className="master-data">Master Data</li>
                    <ul className="lis-data">
                        <li>Data Kendaraan</li>
                        <li>Data Admin</li>
                        <li>Data User</li>
                        <li>Data Pemegang</li>
                    </ul>
                    <li>Laporan</li>
                </ul>
                <ul>
                    <li>Logout</li>
                </ul>
            </header>

            <main>
                <article className="header-dashboard">
                    <h2>Dashboard Admin</h2>
                    <div>
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src="" alt="profile" />
                    </div>
                </article>

                <article className="content">
                    <div class="card vehicle">
                        <h3>DATA KENDARAAN</h3>
                        <p>4<span>Kendaraan</span></p>
                    </div>
                    <div class="card user">
                        <h3>DATA USER</h3>
                        <p>6<span>User</span></p>
                    </div>
                    <div class="card holder">
                        <h3>DATA PEMEGANG</h3>
                        <p>2<span>Pemegang</span></p>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Dashboard;