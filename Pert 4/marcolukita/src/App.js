import React from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Help from "./views/Help/Help";
import Profil from "./views/Profil/Profil";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
class App extends React.Component {
  //Router
  render() {
    return (
      <Router>
        <div className='navbar navbar-dark bg-dark text-secondary'>
          <div className='ms-2'>
            <Link
              to='/home'
              className='pe-2 text-decoration-none text-secondary'>
              Home
            </Link>
            <Link
              to='/about'
              className='pe-2 text-decoration-none text-secondary'>
              About
            </Link>
            <Link
              to='/help'
              className='pe-2 text-decoration-none text-secondary'>
              Help
            </Link>
            <Link
              to='/profil/Budi'
              className='pe-2 text-decoration-none text-secondary'>
              Budi
            </Link>
            <Link
              to='/profil/Ali'
              className='pe-2 text-decoration-none text-secondary'>
              Ali
            </Link>
            <Link
              to='/profil/Susi'
              className='pe-2 text-decoration-none text-secondary'>
              Susi
            </Link>
          </div>
        </div>
        <Route path='/' exact component={Home}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/help' component={Help}></Route>
        <Route path='/profil/:nama' component={Profil}></Route>
      </Router>
    );
  }
  //function
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //      mahasiswa : [],
  //      nama : null,
  //      nim : null,
  //      nilai : null
  //   }
  // }
  // setValueState(event){
  //   this.setState({
  //     [event.target.name] : event.target.value
  //   })
  // }

  // addData(){
  //   var data_tmp = this.state.mahasiswa;
  //   data_tmp.push({nim : this.state.nim, nama :
  //   this.state.nama, nilai : this.state.nilai});
  //   this.setState({
  //     mahasiswa : data_tmp
  //   })
  // }

  // deleteData(index){
  //   var data_tmp = this.state.mahasiswa;
  //   data_tmp.splice(index,1);
  //   this.setState({
  //     mahasiswa : data_tmp
  //   })
  // }

  // render() {
  //   return (
  //      <div className="container">
  //        <div className="form-container">
  //          <div className="form-group">
  //            <label>Nim :</label>
  //            <input type="text" name="nim" value=
  //            {this.state.nim} onChange={this.
  //            setValueState.bind(this)}
  //            className="form-control"></input>
  //          </div>
  //          <div className="form-group">
  //            <label>Nama :</label>
  //            <input type="text" name="nama" value=
  //            {this.state.nama} onChange={this.
  //            setValueState.bind(this)}
  //            className="form-control"></input>
  //          </div>

  //          <div className="form-group">
  //            <label>Nilai :</label>
  //            <input type="number" name="nilai" min="0"  value=
  //            {this.state.nilai} onChange={this.
  //            setValueState.bind(this)}
  //            className="form-control"></input>
  //          </div>
  //          <button onClick={this.addData.bind(this)} className="btn btn-primary mt-2">
  //             Submit
  //          </button>
  //        </div> <br />
  //        {/* {cetak}        */}
  //        <table className="table table-borderless">
  //          <thead>
  //            <tr>
  //              <th>No.</th>
  //              <th>Nim</th>
  //              <th>Nama</th>
  //              <th>Nilai</th>
  //              <th>#</th>
  //            </tr>
  //          </thead>
  //          <tbody>
  //            {this.state.mahasiswa.map((mhs, index) =>(
  //            <tr key={index}>
  //              <td>{index+1}</td>
  //              <td>{mhs.nim}</td>
  //              <td>{mhs.nama}</td>
  //              <td>{mhs.nilai}</td>
  //              <td>
  //                <button onClick={this.deleteData.bind(this,index)}
  //                 className="btn btn-danger btn-sm">
  //                   Hapus
  //                </button>
  //              </td>
  //             </tr>
  //            ))}
  //          </tbody>
  //        </table>
  //      </div>
  //   );
  // }
  //Multidimensional Array
  // render() {
  //   var data = [
  //     {nama : "Budi", nilai : 80},
  //     {nama : "Ali", nilai : 85},
  //     {nama : "Susi", nilai : 87},
  //   ]
  //   return (
  //     <table class="table">
  //       <thead>
  //         <tr>
  //           <th>No.</th>
  //           <th>Nama</th>
  //           <th>Nilai</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {data.map((item, index) =>(
  //         <tr key={index}>
  //           <td>{index+1}</td>
  //           <td>{item.nama}</td>
  //           <td>{item.nilai}</td>
  //         </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   );
  // }
  //OBJECT ARRAY
  // render() {
  //   var orang = {
  //     nama: "Pet",
  //     nim: "182111233",
  //     email : "pet@mikroskil.ac.id"
  //   }
  //   return (
  //     <table>
  //       <tr>
  //         <td>Nim</td>
  //         <td>:</td>
  //         <td>{orang.nim}</td>
  //       </tr>
  //       <tr>
  //         <td>Nama</td>
  //         <td>:</td>
  //         <td>{orang.nama}</td>
  //       </tr>
  //       <tr>
  //         <td>Email </td>
  //         <td>:</td>
  //         <td>{orang.email}</td>
  //       </tr>
  //     </table>
  //   );
  // }

  // ARRAY
  // render() {
  //   var angka = [1,2,3];
  //   var nama = ["Budi", "Ali", "Susi"]
  //   var campuran = ["Budi", 1, "Ali", 2, "Susi", 3]
  //   return(
  //     <div>
  //       Isi array angka :
  //       <ul>
  //         {angka.map((item, index) =>(
  //           <li>Indeks ke - {index} : {item} </li>
  //         ))}
  //       </ul>
  //       Isi array nama :
  //       <ul>
  //         {nama.map((item, index) =>(
  //           <li>Indeks ke - {index} : {item} </li>
  //         ))}
  //       </ul>
  //       Isi array campuran :
  //       <ul>
  //         {campuran.map((item, index) =>(
  //           <li>Indeks ke - {index} : {item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }
}

export default App;
