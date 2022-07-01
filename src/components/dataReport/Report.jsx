import React from "react";

import { Link } from "react-router-dom";

import ChangePageTitle from '../ChangePageTitle';
import './styles.css';

import photoProfile from '../../img/pp-profile.png'

const Report = () =>{
    const report = (
        [
            {id:1, namaKendaraan: "Mio 125CC", namaPeminjam: "Putra", noHP: "082385676651", tglGuna: "29-09-2022", tglKembali: "2-10-2022"},
            {id:2, namaKendaraan: "Fu Merah", namaPeminjam: "Sinta", noHP: "082385664542", tglGuna: "01-10-2022", tglKembali: "5-10-2022"}
        ]
    ) 

    return (
        <div className="container">
            <>
            <ChangePageTitle pageTitle={"Data Laporan"}/>
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
                    <h2>Laporan</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="contents">
                    <h3>Data Laporan</h3>
                    <Link to={"/add-data-report"}><button>Tambah Data</button></Link>
                </article>

                <div className="table-vehicles">
                    <div>
                        <button className="btn-printall">Cetak Semua Laporan</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nama Kendaraan</th>
                                <th>Nama Peminjam</th>
                                <th>No.HP</th>
                                <th>Tgl Penggunaan</th>
                                <th>Tgl Kembali</th>
                                <th>Print</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {report.map((val, key) => {
                            return (
                                <tbody>
                                    <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.namaKendaraan}</td>
                                        <td>{val.namaPeminjam}</td>
                                        <td>{val.noHP}</td>
                                        <td>{val.tglGuna}</td>
                                        <td>{val.tglKembali}</td>
                                        <td><button className="btn-print">Cetak</button></td>
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

export default Report;