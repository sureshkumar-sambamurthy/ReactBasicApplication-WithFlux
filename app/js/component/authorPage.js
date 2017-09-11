'use strict';

 import React from 'react'
 import { Link } from 'react-router-dom'
 //import authorApi from '../../api/mockapi';
 import authorStore from './authorstore';
 import AuthorListPage from './authorList';

class authorPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
    	authors:[]
      }	
    }
    componentWillMount(){
    	this.setState({authors: authorStore.getAllAuthors()})
    }
	render() {
  
		
		return (
               <div>
                  <h2> Author List Page </h2>
                  <Link to="/addauthor" className="btn btn-warning">Add Author </Link>
                  <AuthorListPage authors={this.state.authors} />
               </div>
			)
	}

}
export default authorPage;