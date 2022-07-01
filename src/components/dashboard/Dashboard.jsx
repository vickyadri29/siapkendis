import React  from "react";
import { Link } from 'react-router-dom';

import ChangePageTitle from '../ChangePageTitle';
import './styles.css'

import photoProfile from '../../img/pp-profile.png'

const Dashboard = () => {
    return (
        <div className="container">
            <>
            <ChangePageTitle pageTitle={"Dashboard"}/>
            </>
            <header>
                <Link to={"/dashboard"}><h1>SIAPKENDIS</h1></Link>

                <ul className="nav-menu">
                    <Link className="link-nav" to={'/dashboard'}><li className="dashboard">Dashboard</li></Link>
                    <li className="master-data">Master Data</li>
                    <ul className="list-data">
                        <Link to={'/vehicles'}><li>Data Kendaraan</li></Link>
                        <Link to={'/administrator'}><li>Data Admin</li></Link>
                        <Link to={'/user'}><li>Data User</li></Link>
                        <Link to={'/holder'}><li>Data Pemegang</li></Link>
                    </ul>   
                    <Link to={'/report'}><li className="report">Laporan</li></Link>
                </ul>
                <ul>
                    <Link to={'/'}><li className="logout">Logout</li></Link>
                </ul>
            </header>

            <main>
                <article className="header-dashboard">
                    <h2>Dashboard Admin</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="content">
                    <div className="card vehicle">
                        <h3>DATA KENDARAAN</h3>
                        <p>4<span>Kendaraan</span></p>
                    </div>
                    <div className="card user">
                        <h3>DATA USER</h3>
                        <p>6<span>User</span></p>
                    </div>
                    <div className="card holder">
                        <h3>DATA PEMEGANG</h3>
                        <p>2<span>Pemegang</span></p>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default Dashboard;