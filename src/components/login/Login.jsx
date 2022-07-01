import React from "react";
import { Link } from "react-router-dom"

import ChangePageTitle from '../ChangePageTitle';
import './styles.css';
import iconAdmin from '../../img/admin.png';
import iconVehicle from '../../img/vehicle.png';
import iconPrint from '../../img/print.png';

function Login() {
    return (
        <div className="main">
            <>
            <ChangePageTitle pageTitle={"Halaman Login"} />
            </>
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
                    <table>
                        <tbody>
                            <tr>
                                <td><input type="text" name="username" placeholder="Masukan Username" /></td>
                                <td></td>
                                <td><input type="password" name="password" placeholder="Masukan Password" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    <p>Lupa Password? Klik Disini</p>
                    <Link to={"/dashboard"}><button className="btn-login">Login</button></Link>

            </article>
        </div>
    )
};

export default Login;