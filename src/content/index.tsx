import React from 'react';
import Credits from './Credits';
import Running from './Running';
import Setup from './Setup';
import Stack from './Stack';
import Welcome from './Welcome';

const Content = () => {
	return <div id="content" tabIndex={2} className="flex flex-col flex-1">
		<Welcome />
		<Setup />
		<Running />
		<Stack />
		<Credits />
	</div>
}

export default Content