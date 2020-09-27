import React, { useState } from 'react';
import welcomeImage from '../images/welcome-onBoarding-image.JPG'
import './styles/Welcome.css'

function Welcome({addName}) {
	const [valueName, setValueName] = useState('');

	const handleSubmit = (e) => {
		// console.log('pruebaValue', valueName)
		e.preventDefault();
		if(!valueName)
		return
		addName(valueName);
		setValueName('');
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
				value="Submit"/>
			</form>
		</div>
	);
}

export default Welcome;