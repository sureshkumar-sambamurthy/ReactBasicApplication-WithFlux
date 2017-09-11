'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

class AuthorListPage extends React.Component{

    propTypes : {
    	authors: React.PropTypes.array.isRequired
    };
	render(){

		var createAuthorRow = function(item){
           return (
           	       <tr key={item.id}>
           	          <td><Link to={`/updateauthor/${item.id}` }>{item.id}</Link></td>
           	          <td>{item.firstName}</td>
           	          <td>{item.lastName}</td></tr>
           	   );
		}
		return (

			   <table className="table">
                    <thead>
                     <tr>
                       <th>ID</th>
                       <th>First Name</th>
                       <th>Last Name</th>
                     </tr>
                     </thead>
                     <tbody>
                       {this.props.authors.map(createAuthorRow, this)}
                     </tbody>
                </table>
			)
	}
};
export default AuthorListPage;