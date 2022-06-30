import React from "react";
import './styles.css';

import { Link } from "react-router-dom";

import photoProfile from '../../img/pp-profile.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../fontawesome';


const Vehicles = () => {
    return (
        <div className="container">
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
                    <h2>Kendaraan Dinas</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="table-vehicle">
                    <form action="" className="btn-search">
                        <input type="search" name="search" placeholder="search"/>
                        <button type="submit">Klik disini</button>
                        <div>
                        <FontAwesomeIcon icon={['fal', 'search']} />
                        </div>
                    </form>
                </article>
            </main>
        </div>
    )
}

export default Vehicles;