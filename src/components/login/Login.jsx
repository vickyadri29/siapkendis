import React from "react";
import { Link } from "react-router-dom"

import './styles.css';
import iconAdmin from '../../img/admin.png';
import iconVehicle from '../../img/vehicle.png';
import iconPrint from '../../img/print.png';

function Login() {
    return (
        <div className="main">
            <article className="title">
                <h1>SIAPKENDIS</h1>
                <h2>Sistem Informasi Pengelolaan Kendaraan Dinas</h2>
                <div>
                    <div className="features">
                        <img src={iconAdmin} alt="administrator" />
                        <p>Administrator</p>
                    </div>
                    <div className="features">
                        <img src={iconVehicle} alt="vehicle" />
                        <p>Kendaraan</p>
                    </div>
                    <div className="features">
                        <img src={iconPrint} alt="print" />
                        <p>Cetak Laporan</p>
                    </div>
                </div>
            </article>

            <article className="login">
                    <h2>Silahkan Login</h2>
                <div className="login-center">
                    <tr>
                        <td><input type="text" name="username" placeholder="Masukan Username" /></td>
                        <td></td>
                        <td><input type="password" name="password" placeholder="Masukan Password" /></td>
                    </tr>
                </div>
                    <p>Lupa Password? Klik Disini</p>
                    <Link to={"/dashboard"}><button className="btn-login">Login</button></Link>

            </article>
        </div>
    )
};

export default Login;