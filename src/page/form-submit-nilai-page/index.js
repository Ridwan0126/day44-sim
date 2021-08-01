import React, {Component} from 'react'
import {Form, FormHeader} from "../../component";

class FormSubmitNilaiPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    updateNilai = (e) => {
        e.preventDefault()
        const {dataEditMhs, gtp, setNilaiMhs} = this.props

        let nilaiHuruf1 = e.target.nilaiHuruf[0].value
        let nilaiHuruf2 = e.target.nilaiHuruf[1].value
        let nilaiHuruf3 = e.target.nilaiHuruf[2].value
        console.log(e.target.nilaiHuruf[0].value)
        console.log(e.target.nilaiHuruf[1].value)
        console.log(e.target.nilaiHuruf[2].value)
        const dataKrs = dataEditMhs.krs


        // console.log("data krs lama", dataKrs)
        dataEditMhs.krs[0].nilaiHuruf = nilaiHuruf1
        dataEditMhs.krs[1].nilaiHuruf = nilaiHuruf2
        dataEditMhs.krs[2].nilaiHuruf = nilaiHuruf3

        let newHurufNilai1 = dataEditMhs.krs[0].nilaiHuruf
        let newHurufNilai2 = dataEditMhs.krs[1].nilaiHuruf
        let newHurufNilai3 = dataEditMhs.krs[2].nilaiHuruf

        if(nilaiHuruf1 === "A"){
            dataEditMhs.krs[0].nilai=85
        }else if (nilaiHuruf1 === "B"){
            dataEditMhs.krs[0].nilai=70
        } else if (nilaiHuruf1 === "C"){
            dataEditMhs.krs[0].nilai=55
        } else if (nilaiHuruf1 === "D"){
            dataEditMhs.krs[0].nilai=40
        }else if (nilaiHuruf1 === "E"){
            dataEditMhs.krs[0].nilai=0
        } else {
            dataEditMhs.krs[0].nilai=0
        }

        if(nilaiHuruf2 === "A"){
            dataEditMhs.krs[1].nilai=85
        }else if (nilaiHuruf2 === "B"){
            dataEditMhs.krs[1].nilai=70
        }else if (nilaiHuruf2 === "C"){
            dataEditMhs.krs[1].nilai=55
        }else if (nilaiHuruf2 === "D"){
            dataEditMhs.krs[1].nilai=40
        }else if (nilaiHuruf2 === "E"){
            dataEditMhs.krs[1].nilai=0
        }else {
            dataEditMhs.krs[1].nilai=0
        }

        if(nilaiHuruf3 === "A"){
            dataEditMhs.krs[2].nilai=85
        }else if (nilaiHuruf3 === "B"){
            dataEditMhs.krs[2].nilai=70
        }else if (nilaiHuruf3 === "C"){
            dataEditMhs.krs[2].nilai=55
        }else if (nilaiHuruf3 === "D"){
            dataEditMhs.krs[2].nilai=40
        }else if (nilaiHuruf3 === "E"){
            dataEditMhs.krs[2].nilai=0
        }else {
            dataEditMhs.krs[2].nilai=0
        }

        console.log("cek", dataEditMhs.krs[0].nilaiHuruf)
        console.log("cek nilai", dataEditMhs.krs[0].nilai)
        console.log("cek", dataEditMhs.krs[1].nilaiHuruf)
        console.log("cek", dataEditMhs.krs[2].nilaiHuruf)

        console.log("123", dataEditMhs)
        setNilaiMhs(dataEditMhs)
        gtp("list-mahasiswa")
    }

    renderPageSubmit = () => {
        const {dataEditMhs} = this.props
        const dataKrs = dataEditMhs.krs
        return dataKrs.map((data, index) => {
            return (
                <tr>
                    <td className="cell">{data.mataKuliah}</td>
                    <td className="cell">{data.jumlahSks}</td>
                    <td className="cell">{data.nilai}</td>

                    <td className="cell">
                        <input name="nilaiHuruf" type="text" defaultValue={data.nilaiHuruf}/>
                    </td>

                    <td className="cell">{data.namaDosen}</td>
                </tr>
            )
        })
    }


    render() {
        const {dataEditMhs, gtp} = this.props
        console.log("data 123", dataEditMhs)
        return (
            <form onSubmit={this.updateNilai}>

                <h1 style={{marginLeft: 150}}>Edit Nilai Mahasiswa</h1>
                <button type="submit" style={{borderRadius: 10, marginLeft: 150, width: 100, height: 30, cursor: "pointer"}}>Update
                </button>
                <h3 style={{marginLeft: 150}}>Nama : {dataEditMhs.nama}</h3>
                <h3 style={{marginLeft: 150}}>NIM : {dataEditMhs.nim}</h3>
                <h3 style={{marginLeft: 150}}>Jurusan : {dataEditMhs.jurusan}</h3>
                <h3 style={{marginLeft: 150}}>Jumlah SKS
                    : {dataEditMhs.krs[0].jumlahSks + dataEditMhs.krs[1].jumlahSks + dataEditMhs.krs[2].jumlahSks}</h3>
                <h3 style={{marginLeft: 150}}>IPS : </h3>
                <table className="customers-list">
                    <thead>
                    <th>Mata Kuliah</th>
                    <th>Jumlah SKS</th>
                    <th>Nilai</th>
                    <th>Nilai</th>
                    <th>Nama Dosen</th>
                    </thead>
                    <tbody>
                    {this.renderPageSubmit()}
                    </tbody>
                </table>
            </form>
        );
    }
}

export default FormSubmitNilaiPage;