import React from "react";

import ChangePageTitle from '../ChangePageTitle';
import './styles.css';

import { Link } from "react-router-dom";

import photoProfile from '../../img/pp-profile.png'

const User = () => {
    const user = (
        [
            {id:1, nama: "User", email: "user@gmail.com", noHP: "082385676651"},
            {id:2, nama: "Putra", email: "putra@gmail.com", noHP: "082355664443"}
        ]
    ) 

    return (
        <div className="container">
            <>
            <ChangePageTitle pageTitle={"Data User"} />
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
                    <h2>User</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="contents">
                    <h3>Data User</h3>
                    <Link to={"/add-data-user"}><button>Tambah Data</button></Link>
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
                        {user.map((val, key) => {
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

export default User;