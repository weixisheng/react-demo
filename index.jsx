
require('./app/lib/common.css');
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './app/components/search_1.jsx'; 
import Header from './app/components/header_1.jsx'; 
import Otherapp from './app/components/otherapp_1.jsx'; 
import Spike from './app/components/spike_1.jsx'; 
import More from './app/components/more_1.jsx'; 
import Like from './app/components/like_1.jsx'; 

ReactDOM.render(
	<div>
		<Search />
		<Header source="http://localhost:3000/data/swiper" />
		<Otherapp source="http://localhost:3000/data/otherapp" />
		<Spike source="http://localhost:3000/data/spike" />
		<More source="http://localhost:3000/data/more" />
		<Like source="http://localhost:3000/data/like" />
	</div>, 
	document.querySelector("#myApp")
);
