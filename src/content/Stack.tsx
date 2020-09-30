import React from 'react';
import Data from '../data/welcome.json'

const Stack = () => {
	return <div id="stack">
		<h1>Stack We Used in {Data.appName}</h1>
		<ol>
			<li>Yarn</li>
			<li>React Native</li>
			<li>Type Script</li>
		</ol>
	</div>
}

export default Stack