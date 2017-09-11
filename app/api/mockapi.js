"user strict";

var authors = require('./authorData').authors;
var _ = require('lodash');

var _clone = function(item){
    return JSON.parse(JSON.stringify(item));
}
var generateId = function(data){
	return  data.firstName+"-"+data.lastName;
}
var  mockApi = {

	getAllAuthors: function(){
         return _clone(authors);
	},
	saveAuthor: function(data){
		
		var id = generateId(data);
		if(id){
            data.id = id;
            authors.push(data);
		}
		return _clone(data);
	},
	getAuthorById:function(authorId){
		var author = _.find(authors, {id: authorId});
		console.log(author);
		return _clone(author);
	}

};

export default mockApi;
