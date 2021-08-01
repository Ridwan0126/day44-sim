import React, {Component} from 'react'
import './table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderHeaderTable = () => {
        const {headerName} = this.props
        return headerName.map((header, index) => {
            return (
                <th>{header}</th>
            )
        })
    }

    renderCellTable = data => {
        const cellArr = Object.keys(data)
        return cellArr.map((key, index) => {

            if(key==="clickEvent") {
                const clickArr = Object.keys(data[key])
                const button = clickArr.map((key2,index)=> {
                    return <button className={key2} onClick={data[key][key2]}></button>
                })
                return (
                    <td key={index} className="cell">
                        {button}
                    </td>
                )               
            }

            return (
                <td key={index} className="cell">{data[key]}</td>
            )
        })
    }

    renderBodyTable = () => {
        const {dataList} = this.props
        return dataList.map((data, index) => {
            return (
                <tr key={index}>
                    <td className="cell num">{index + 1}</td>
                    {this.renderCellTable(data)}
                </tr>
            )
        })
    }

    

    render() {
        const {className} = this.props
        return (
            <>
                <table className={className} width="80%">
                    <thead>
                        {this.renderHeaderTable()}
                    </thead>
                    <tbody>
                        {this.renderBodyTable()}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Table;