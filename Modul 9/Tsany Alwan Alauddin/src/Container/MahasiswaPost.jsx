import React, {Component} from "react";
import './MahasiswaPost.css';
import Mahasiswa from "../Component/Mahasiswa/Mahasiswa";
import API from "../Services";

class MahasiswaPost extends Component{

    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            id: 1,
            nama: "",
            nim: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        // fetch('http://localhost:3001/mahasiswa?_sort=id&_order=desc')
        // .then(response => response.json())
        // .then(jsonHasilAmbilDariAPI => {
        //     this.setState({
        //         listMahasiswa: jsonHasilAmbilDariAPI
        API.getNewsBlog().then(result=>{
            this.setState({
                listMahasiswa: result
            })          
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleHapusMahasiswa = (data) => {
        // fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
        // .then(res => {
        //     this.ambilDataDariServerAPI()
        API.deleteNewsBlog(data)
                this.ambilDataDariServerAPI();
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        // fetch(`http://localhost:3001/mahasiswa/`, {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(this.state.insertMahasiswa)
        // })
        //     .then((Response) => {
        //         this.ambilDataDariServerAPI();
        API.postNewsBlog(this.state.insertMahasiswa)
        .then((response)=>{
            this.ambilDataDariServerAPI();
            });
    }

    render(){
        return(  
            <div className="post-artikel">
                
                

                <div className="form pb-2 border bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-from-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="nama" 
                            onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>

                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="body" name="nim" 
                            onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>
                
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="alamat" rows="3" 
                            onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                </div>
                
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">No. Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="body" name="hp" rows="3" 
                            onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>
                
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="body" name="angkatan" rows="3" 
                            onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>
                
                <div className="form-group row">
                <label htmlFor="body" className="col-sm-2 col-from-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" title="body" name="status" rows="3" 
                            onChange={this.handleTambahMahasiswa}/>
                        </div>
                </div>
                <button type="submit" className="btn btn-success" alig onClick={this.handleTombolSimpan}>
                Simpan</button>
            </div>

            <h2>Daftar Mahasiswa</h2> 
            {
                this.state.listMahasiswa.map(mahasiswa => {
                    return <Mahasiswa key={mahasiswa.id} nama={mahasiswa.nama} nim={mahasiswa.nim} 
                    alamat={mahasiswa.alamat} hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} 
                    status={mahasiswa.status} 
                    idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>
                })
            }
        </div>   
        )
    }
}

export default MahasiswaPost;
