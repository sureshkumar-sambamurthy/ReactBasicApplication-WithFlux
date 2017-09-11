'use strict';

import Dispatcher from './appdispatcher';
import EventEmitter from 'events';
import api from '../../api/mockapi';
import objectAssign from 'object-assign';
import _ from 'lodash';

var _author = [];
var authorStore = objectAssign({}, EventEmitter.prototype,{
   
     addChangeListener:function(callback){
         this.on("change", callback);
     },
     removeChangListener:function(callback){
         this.removeListener("change", callback);
     },
     emitChange:function(){
     	this.emit("change");
     },
     getAllAuthors:function(){
        if (_author.length === 0) {
            _author = api.getAllAuthors();
        }
     	return _author;
     },
     getAuthorById:function(authorId){
        return _.find(_author, {id:authorId});
     }
});

Dispatcher.register(function(action){
   switch(action.actionType){
       case 'CREATE_AUTHOR':
        _author.push(action.author);
        break;
   }
});
module.exports = authorStore;