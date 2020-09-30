import React from 'react';
import Title from '../components/Title';
import Data from '../data/welcome.json'

const Welcome = () => {
	const { appName, features, description } = Data
	return <div id="welcome">
		<Title>{`${appName} React Native App Template`}</Title>
		<h2>Welcome to {appName} React Native App Template</h2>
		<div>{description}</div>
		<h3>Template Feature</h3>
		<ul style={{ listStyle: "square" }}>
			{
				features.map((f, i) => <li key={i.toString()}>{f}</li>)
			}
		</ul>
	</div>
}

export default Welcome