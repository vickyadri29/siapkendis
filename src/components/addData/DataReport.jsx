import React from "react";

import ChangePageTitle from '../ChangePageTitle';
import './styles.css';
import { Link } from "react-router-dom";

import photoProfile from '../../img/pp-profile.png';


const DataReport = () => {
    return (
        <div className="container">
            <>
            <ChangePageTitle pageTitle={"Tambah Data Laporan"}/>
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
                    <h2>Data Laporan</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="contents">
                    <h3>Tambah Data Laporan</h3>
                </article>

                <div className="table-data-vehicles">
                    <form action="">
                        <label htmlFor="id">
                            ID<br />
                            <input type="text" name="id"/>
                        </label>
                        <label htmlFor="merk">
                            Nama Kendaraan <br />
                            <input type="text" name="merk" />
                        </label>
                        <label htmlFor="merk">
                            Nama Peminjam <br />
                            <input type="text" name="merk" />
                        </label>
                        <label htmlFor="noRangka">
                            No.HP <br />
                            <input type="text" name="noRangka" />
                        </label>
                        <label htmlFor="merk">
                            Tgl. Peminjam <br />
                            <input type="text" name="merk" />
                        </label>
                        <label htmlFor="merk">
                            Tgl. Kembali <br />
                            <input type="text" name="merk" />
                        </label>
                        <label htmlFor="merk">
                            Print<br />
                            <input type="text" name="merk" />
                        </label>
                    </form>
                    <div className="btn-add">
                        <div className="btn-left">
                            <button className="btn-back">Kembali</button>
                            <button className="btn-reset">Reset</button>
                        </div>
                        <button className="btn-save">Simpan</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DataReport