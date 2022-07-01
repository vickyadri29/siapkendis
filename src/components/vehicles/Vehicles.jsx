import React from "react";
import './styles.css';

import { Link } from "react-router-dom";

import photoProfile from '../../img/pp-profile.png'


const Vehicles = () => {
    const vehicles = (
        [
            {id:1, nama: "Mio", merk:"Yamaha", noRangka: 9235553, noMesin: 5432346, noBPKB: 129423, noPolisi: 5342346, tahun:2022, status: "Tersedia", keterangan: "Ini adalah Kendaraan"}
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
                    <h2>Kendaraan Dinas</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="contents">
                    <h3>Data Kendaraan</h3>
                    <Link to={"/add-data-vehicles"}><button>Tambah Data</button></Link>
                </article>

                <div className="table-vehicles">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama</th>
                                <th>Merk</th>
                                <th>No. Rangka</th>
                                <th>No. Mesin</th>
                                <th>No. BPKB</th>
                                <th>No. Polisi</th>
                                <th>Tahun</th>
                                <th>Status</th>
                                <th>Keterangan</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {vehicles.map((val, index) => {
                            return (
                                <tbody>
                                    <tr key={index}>
                                        <td>{val.id}</td>
                                        <td>{val.nama}</td>
                                        <td>{val.merk}</td>
                                        <td>{val.noRangka}</td>
                                        <td>{val.noMesin}</td>
                                        <td>{val.noBPKB}</td>
                                        <td>{val.noPolisi}</td>
                                        <td>{val.tahun}</td>
                                        <td>{val.status}</td>
                                        <td>{val.keterangan}</td>
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

export default Vehicles;