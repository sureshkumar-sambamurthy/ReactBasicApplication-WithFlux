"use strict";

import React from 'react';
import {BrowserRouter as Router, Route, DefaultRoute} from 'react-router-dom';

import authorpage from './component/authorPage';
import addauthor from './component/addauthor';

var Routes = (
	<Router>
	   <div>
	      <Route exact  path="/" component={authorpage} />
	      <Route path="/addauthor" component={addauthor} />
	      <Route path="/updateauthor/:id" component={addauthor} />

	   </div>
	</Router>
);
export default Routes;