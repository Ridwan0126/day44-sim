import React, {Component} from 'react'
import './table-mahasiswa.css'

class TableMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmitNilai = e => {
        const {gtp, handleSubmitNilai} = this.props
        let id = e.target.id
        console.log("edit id",id)
        handleSubmitNilai(id)
        gtp("submit-nilai-mahasiswa")
    }

    handleDetail=(e)=>{
        const {gtp, handleDetail}=this.props
        let id = e.target.id
        console.log("id detail", id)
        handleDetail(id)

        gtp("detail-krs-mahasiswa")
    }

    renderListMahasiswas = () => {
        const {dataMahasiswa} = this.props
        return dataMahasiswa.map((data, index) => {
            return (
                <tr key={index}>
                    <td className="cell num">{index + 1}</td>
                    <td className="cell">{data.nama}</td>
                    <td className="cell">{data.nim}</td>
                    <td className="cell">{data.jurusan}</td>
                    <td className="cell">{data.strata}</td>
                    <td className="cell">{data.semester}</td>
                    <td className="cell action">
                        <button style={{borderRadius: 10, width: 100, height: 30,cursor: "pointer", marginRight: 10}} id={data.id}
                                onClick={this.handleSubmitNilai}
                        >Submit Nilai
                        </button>
                        <button style={{borderRadius: 10, width: 100, height: 30,cursor: "pointer", marginRight: 10}} id={data.id}
                            onClick={this.handleDetail}
                        >Detail KRS
                        </button>
                        <button style={{borderRadius: 10, width: 100, height: 30,cursor: "pointer", marginRight: -150}} id={data.id}
                                onClick={this.handleDetail}
                        >Detail Profile
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const {gtp} = this.props
        const {dataMahasiswa} = this.props
        console.log("data =", dataMahasiswa)
        return (
            <>
                {/*<div style={{marginLeft: 150}}>*/}
                {/*    <button style={{cursor: "pointer"}}>Add Nilai Mahasiswa</button>*/}
                {/*</div>*/}
                <table className="customers-list" width="80%">
                    <thead>
                    <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Jurusan</th>
                    <th>Strata</th>
                    <th>Semester</th>
                    <th>Actions</th>
                    </thead>

                    <tbody>
                    {this.renderListMahasiswas()}
                    </tbody>
                </table>
            </>
        );
    }
}

export default TableMahasiswa;