/**
 * Created by nad on 06/09/15.
 */

import React from 'react';

class InputText extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        var wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text"
                           name={this.props.name}
                           className="form-control"
                           placeholder={this.props.placeholder}
                           value={this.props.value}
                           onChange={this.props.onChange} />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
        )
    }

}

InputText.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
}

export default InputText;