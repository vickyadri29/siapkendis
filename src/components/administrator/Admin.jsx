import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { useState } from "react";

import photoProfile from '../../img/pp-profile.png';

const Admin = () => {
    const [admin, setAdmin] = useState(
        [
            {id:1, nama: "Admin", email: "administrator@gmail.com", noHP: "082368423456"},
            {id:2, nama: "Jindan", email: "jindanza@gmail.com", noHP: "085376544457"}
        ]
    ) 

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
                    <h2>Admin</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="contents">
                    <h3>Data Admin</h3>
                    <Link to={'/add-data-admin'}><button>Tambah Data</button></Link>
                </article>

                <div className="table-vehicles">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>No.HP</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {admin.map((val, key) => {
                            return (
                                <tbody>
                                    <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.nama}</td>
                                        <td>{val.email}</td>
                                        <td>{val.noHP}</td>
                                        <td><Link to={"/"}>Edit</Link> | <Link to={"/"}>Hapus</Link></td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Admin;