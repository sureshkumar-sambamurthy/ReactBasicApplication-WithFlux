'use strict';

import React from 'react';
import Input from './reusablecomp';

class AuthorFormPage extends React.Component{
    
	render(){

		return (
          <form>
            <h1> Manage Author </h1>
            <Input 
              label="First Name" 
              name="firstName"
              compType="text"  
              placeholder="enter firstname" 
              value={this.props.author.firstName} 
              onChange={this.props.onChange} 
              errors={this.props.errors.firstName} />

              <Input 
              label="Last Name" 
              name="lastName"
              compType="text"  
              placeholder="enter lastname" 
              value={this.props.author.lastName} 
              onChange={this.props.onChange} 
              errors={this.props.errors.lastName} />

            <input type="submit" value="save" className="btn btn-warning" onClick={this.props.saveHandler}/>
          </form>
			   
			)
	}
};
export default AuthorFormPage;