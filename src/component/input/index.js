import React, { Component } from 'react';
import "./input.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderOption = dataArr => {
        return dataArr.map((data, index) => {
            if (index===0) return <option value=''>{data}</option>

            return <option value={data}>{data}</option>
        })
    }

    renderInput = () => {
        const {name, dataArr, focus, blur, typeTx, handleChange} = this.props
       if(typeTx==="select") return ( 
        <div>
            <h5>{name}</h5>
            <select name={name.toLowerCase()} className="selectOpt" onChange={handleChange} required>
                {this.renderOption(dataArr)}
            </select>
         </div>
       )

       if(typeTx==="radio") return (
        <div>
            <h5>{name}</h5>
            <input className="radioInput" type={typeTx} value="Male" name={name.toLowerCase()} onChange={handleChange} required/> Male 
            <input className="radioInput" type={typeTx} value="Male" name={name.toLowerCase()} onChange={handleChange} /> Female 
        </div>
       )

    return (<div>
                <h5>{name}</h5>
                <input id={`isFocus${name}`} className="input" type={typeTx} onFocus={focus} onBlur={blur} name={name.toLowerCase()} onChange={handleChange} required/>
            </div>)
    }

    renderAlert = () => {
        const { state, name} = this.props
        if (state[`${name.toLowerCase()}`]==='' && state['submitStatus']) return <span className="textALert">*Wajib Diisi</span>

        return ''
    }

    render() {
        const { state, icon, name } = this.props
        return (
            <>
            <div className={`input-div ${ state[`isFocus${name}`] ? 'focus' : ''} ${ state[`${name.toLowerCase()}`]==='' && state['submitStatus']? 'redAlert' : ''}`}>
                <div className="i">
                    {icon}      
                </div>
                {this.renderInput()}
            </div>
            {this.renderAlert()}
            </>
        );
    }
}

export default Input;