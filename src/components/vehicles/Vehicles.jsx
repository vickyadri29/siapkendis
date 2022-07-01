import React from "react";

import ChangePageTitle from '../ChangePageTitle';
import './styles.css';

import { Link } from "react-router-dom";

import photoProfile from '../../img/pp-profile.png'

const Vehicles = () => {
    const vehicles = (
        [
            {
                "id": 1,
                "nama": "Toyota  /  Fortuner 2.5 G A/T",
                "merk": "Toyota",
                "noRangka": "MHF2R69G3F3121004",
                "noMesin": "2KDU713805",
                "noBPKB": "L-07580818",
                "noPolisi": "DN 2 C",
                "tahun": 2015,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 2,
                "nama": "TOYOTA / KIJANG INNOVA V LUXURY M/T",
                "merk": "Toyota",
                "noRangka": "MHFXW43G6F4092704",
                "noMesin": "1TR-7994417",
                "noBPKB": "L-07580819",
                "noPolisi": "DN 7 C",
                "tahun": 2015,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 3,
                "nama": "Toyota  / Grand New Avanza Velos 1.5 M/T-2016",
                "merk": "Toyota",
                "noRangka": "MHKM5FAJGKO18353",
                "noMesin": "1NR-F561046",
                "noBPKB": "L- 07552678",
                "noPolisi": "DN 391 C",
                "tahun": 2016,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 4,
                "nama": "HONDA NEW VARIO / ESP Exlusive MMC 2017",
                "merk": "Honda",
                "noRangka": "MH1KF1125HK181345",
                "noMesin": "KF11E-2178511",
                "noBPKB": "L-01898745",
                "noPolisi": "DN 2449 R",
                "tahun": 2017,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 5,
                "nama": "Yamaha X - Ride / YAMAHA/2BU",
                "merk": "Yamaha",
                "noRangka": "MH32BU002EJ169593",
                "noMesin": "2BU-169603",
                "noBPKB": "L-02576321",
                "noPolisi": "DN 2072 R",
                "tahun": 2014,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 6,
                "nama": "Honda Blade R",
                "merk": "Honda",
                "noRangka": "MH1JBH114EK431872",
                "noMesin": "JBH1E-1428907",
                "noBPKB": "K-09021882",
                "noPolisi": "DN 4348 R",
                "tahun": 2014,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 7,
                "nama": "Honda Vario Techno Non CBS FI",
                "merk": "Honda",
                "noRangka": "MH1JF8115DK943062",
                "noMesin": "JF81E-1936952",
                "noBPKB": "K-09008590",
                "noPolisi": "DN 4352 R",
                "tahun": 2014,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 8,
                "nama": "Honda / Beat Spprty CW CBS ESP 2016",
                "merk": "Honda",
                "noRangka": "MH1JFR118GK328628",
                "noMesin": "JFR1E - 1325543",
                "noBPKB": "K-12437861",
                "noPolisi": "DN 2228 R",
                "tahun": 2016,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 9,
                "nama": "Suzuki Thunder FL 125 RCD",
                "merk": "Suzuki",
                "noRangka": "MHSBF45DA73135652",
                "noMesin": "F496-ID-166543",
                "noBPKB": "8299059 S",
                "noPolisi": "DN 6510 CB",
                "tahun": 2007,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 10,
                "nama": "Toyota Grand New Veloz",
                "merk": "Toyota",
                "noRangka": "MHKM5EA4JHKO17672",
                "noMesin": "1NRF243890",
                "noBPKB": "L017672",
                "noPolisi": "DN 1104 C",
                "tahun": 2017,
                "status": "Tersedia",
                "keterangan": "DPRD"
              },
              {
                "id": 11,
                "nama": "Suzuki 110",
                "merk": "Suzuki",
                "noRangka": "MHDRC155SXJ-347683",
                "noMesin": "E107-ID-647827",
                "noBPKB": "8727087 S",
                "noPolisi": "DN 6377 C",
                "tahun": 1999,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 12,
                "nama": "Sanex/Siera",
                "merk": "Siera",
                "noRangka": "LAWXEGOE2Y-070082",
                "noMesin": "QJ150FMG-3-00060394",
                "noBPKB": "0507741",
                "noPolisi": "DN 6499 C",
                "tahun": 2001,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 13,
                "nama": "Yamaha/Jupiter",
                "merk": "Yamaha",
                "noRangka": "MH35LM0023K157495",
                "noMesin": "5LM-157579",
                "noBPKB": "5799653 S",
                "noPolisi": "DN 6010 CC",
                "tahun": 2003,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 14,
                "nama": "Honda/NF 100LD",
                "merk": "Honda",
                "noRangka": "MH1HB21124K304225",
                "noMesin": "HB21E1296210",
                "noBPKB": "9181008S",
                "noPolisi": "DN 6061 CB",
                "tahun": 2004,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 15,
                "nama": "MIO GT",
                "merk": "Yamaha",
                "noRangka": "MH32BJ001DJ050402",
                "noMesin": "2BJ-50414",
                "noBPKB": "K-00535182",
                "noPolisi": "DN 2041 R",
                "tahun": 2013,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 16,
                "nama": "Kawasaki / Trail KLX 150s",
                "merk": "Kawasaki",
                "noRangka": "MH4LX150CDKP72835",
                "noMesin": "LX150CEPB2479",
                "noBPKB": "K-00849489",
                "noPolisi": "DN 4123 R",
                "tahun": 2013,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 17,
                "nama": "Kawasaki / Trail KLX 150s",
                "merk": "Kawasaki",
                "noRangka": "MH4LX150CDKP72835",
                "noMesin": "LX150CEPB2479",
                "noBPKB": "K-00849489",
                "noPolisi": "DN 4123 R",
                "tahun": 2013,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 18,
                "nama": "Toyota Kijang",
                "merk": "Toyota",
                "noRangka": "MHF11KF80100649B10",
                "noMesin": "7K-0408590",
                "noBPKB": "",
                "noPolisi": "DN 111 CC",
                "tahun": 1996,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 19,
                "nama": "Toyota Avanza",
                "merk": "Toyota",
                "noRangka": "MHFE2CK3J7K000591",
                "noMesin": "ITR-6390491",
                "noBPKB": "6171080",
                "noPolisi": "B 2439 BQ",
                "tahun": 2005,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 20,
                "nama": "HINO DUTRO 130 MDBL",
                "merk": "Hino",
                "noRangka": "MJEC1JG53J5001936",
                "noMesin": "W04DTRR56011",
                "noBPKB": "M-10687653",
                "noPolisi": "DN 7508 C",
                "tahun": 2018,
                "status": "Tersedia",
                "keterangan": "SETDA"
              },
              {
                "id": 21,
                "nama": "Shogun 125 RR",
                "merk": "Honda",
                "noRangka": "MH8BF45DA8J-231523",
                "noMesin": "F4965-ID-288071",
                "noBPKB": "6707932S",
                "noPolisi": "DN 6604 CB",
                "tahun": 2008,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 22,
                "nama": "Suzuki FL 125 RCD",
                "merk": "Suzuki",
                "noRangka": "MH8BF45DAAJ-312185",
                "noMesin": "F496-ID-386398",
                "noBPKB": "H06186864",
                "noPolisi": "DN 6762 CB",
                "tahun": 2010,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 23,
                "nama": "Honda Supra X 125 Spoke",
                "merk": "Honda",
                "noRangka": "MH1JB8116CK826164",
                "noMesin": "JB81E-1823235",
                "noBPKB": "JO1839220",
                "noPolisi": "DN 6889 CB",
                "tahun": 2012,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 24,
                "nama": "Honda Blade Repsol / NF 11C1C M/T",
                "merk": "Honda",
                "noRangka": "MH1JBH117DK420282",
                "noMesin": "JBH1E-1413821",
                "noBPKB": "K-09021880",
                "noPolisi": "DN 4226 R",
                "tahun": 2013,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 25,
                "nama": "Yamaha / Soul GT Muscle",
                "merk": "Yamaha",
                "noRangka": "MH31KP00DEJ891471",
                "noMesin": "IKP-891497",
                "noBPKB": "L-02576322",
                "noPolisi": "DN 2073 R",
                "tahun": 2014,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 26,
                "nama": "Toyota / Avanza Velos 1.5 M/T",
                "merk": "Toyota",
                "noRangka": "MKKM1CA4JKDK046951",
                "noMesin": "DDU6313",
                "noBPKB": "K-02567308",
                "noPolisi": "DN 1160 C",
                "tahun": 2013,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 27,
                "nama": "Toyota / NEW Avanza Velos 1.5 M/T",
                "merk": "Toyota",
                "noRangka": "MHKM1CA4JEK067927",
                "noMesin": "DEG22128",
                "noBPKB": "K06931131S1",
                "noPolisi": "DN 309 R",
                "tahun": 2014,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 28,
                "nama": "Toyota Granf New Avanza Veloz1.5 M/T-2016 (Silver)",
                "merk": "Toyota",
                "noRangka": "MHKM5FA4JGK011380",
                "noMesin": "2NR-F539180",
                "noBPKB": "K-12437601",
                "noPolisi": "DN 373 R",
                "tahun": 2016,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 29,
                "nama": "Toyota / All New Innova 2.0 G M/T Gasoline-2016",
                "merk": "Toyota",
                "noRangka": "MHFJW8EM6G2314672",
                "noMesin": "1TR-A158578",
                "noBPKB": "N-01512543",
                "noPolisi": "DN 401 R",
                "tahun": 2016,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              },
              {
                "id": 30,
                "nama": "Toyota Granf New Avanza Veloz 1.5 M/T-2016(Putih)",
                "merk": "Toyota",
                "noRangka": "MHKM5FA4JGK012019",
                "noMesin": "2NR-F541310",
                "noBPKB": "K-12437602",
                "noPolisi": "DN 374 R",
                "tahun": 2016,
                "status": "Tersedia",
                "keterangan": "BPKAD"
              }
        ]
    ) 

    return (
        <div className="container">
          <>
          <ChangePageTitle pageTitle={"Data Kendaraan"}/>
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
                                <th>Nama Dinas</th>
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