'use strict';

import React from 'react';

class Input extends React.Component{

	render(){
		var wrapperClass='form-group';
        if(this.props.errors && this.props.errors.length > 0){
        	wrapperClass += " " + 'hs-error'; 
        }
		return (
			<div className={wrapperClass}>
	            <label htmlFor={this.props.name}>{this.props.label}</label>
	            <div className="field">
		            <input type={this.props.compType}
		              name={this.props.name}
		              className="form-control"
		              placeholder={this.props.placeholder}
		              ref={this.props.name}
		              onChange={this.props.onChange}
		              value={this.props.value} />
		              <div className="input">{this.props.errors}</div>
	            </div>
	        </div>
		)
	};
}
export default Input;