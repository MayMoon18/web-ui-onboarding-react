import React from 'react';
import Footer from './shared/Footer';

import './styles/Ready.css';

function Ready() {
	return(
		<div className="ready-background">
		<div className="ready-container">
			<h1>We are ready!</h1>
			<button onClick={() => window.open('https://www.globant.com', '_blank')} className="ready-btn"></button>
		</div>
		<Footer backUrl='key-people' nextUrl=''></Footer>
		</div>
	)
}

export default Ready;