import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './styles/Welcome.css';

import welcomeImage from '../images/welcome-image.png';

function Welcome({addName}) {
	const [valueName, setValueName] = useState('');
	let history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!valueName)
		return
		addName(valueName);
		setValueName('');
		history.push("/imagine");
	}

	return (
		<div className="container">
			<h1 className="title">So excited to have you on board!</h1>
			<img src={ welcomeImage } alt="Welcome"/>

			<form onSubmit={handleSubmit}>
				<input 
				className="input-name"
				type="text" 
				name="name" 
				placeholder="Your Name"
				onChange={e => setValueName(e.target.value)}
				value={valueName}
				/>
				<input 
				className="button-save" 
				type="submit" 
				value="SAVE"/>
			</form>
		</div>
	);
}

export default Welcome;