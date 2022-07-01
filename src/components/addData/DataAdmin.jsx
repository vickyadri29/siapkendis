import React, { useState } from "react";

import { Link } from "react-router-dom";

import photoProfile from '../../img/pp-profile.png';
import './styles.css'

const dataAdmin = () => {
    const [val, setVal] = useState();
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
                    <h2>Data Admin</h2>
                    <div className="profile">
                        <p>Selamat Datang, <span>Admin!</span></p>
                        <img src={photoProfile} alt="profile" />
                    </div>
                </article>

                <article className="contents">
                    <h3>Tambah Data Admin</h3>
                </article>

                <div className="table-data-vehicles">
                    <form action="">
                        <label htmlFor="id">
                            ID<br />
                            <input type="text" name="id"  className="id" value={val}/>
                        </label>
                        <label htmlFor="nama">
                            Nama Admin<br />
                            <input type="text" name="nama"  className="name" value={val}/>
                        </label><br />
                        <label htmlFor="email">
                            Email <br />
                            <input type="text" name="email" value={val}/>
                        </label>
                        <label htmlFor="noHP">
                            No.HP <br />
                            <input type="text" name="noHP" value={val}/>
                        </label>

                    </form>
                    <div className="btn-add">
                        <div className="btn-left">
                            <Link to={"/administrator"}><button className="btn-back">Kembali</button></Link>
                            <button onClick={() => setVal(() => "")} className="btn-reset">Reset</button>
                        </div>
                        <button className="btn-save">Simpan</button>
                    </div>
                </div>
            </main>
        
    </div>
  );
}

export default dataAdmin;