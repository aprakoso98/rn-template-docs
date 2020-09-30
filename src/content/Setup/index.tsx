import React from 'react';
import Link from '../../components/Link';
import Title from '../../components/Title';
import Welcome from '../../data/welcome.json'
import SetupAndroid from './android';
import SetupFolderStructure from './folderStructure';
import SetupiOS from './ios';

const Setup = () => {
	const { appName } = Welcome
	return <div id="setup">
		<Title align="left">{`What Inside of ${appName} & How to run the source code`}</Title>
		<h2>Setting up the development environment</h2>
		<h3>NodeJS</h3>
		<div>Make sure you have a recent version (8.11 or later) of <Link href="https://nodejs.org/en/download/">Node</Link> installed globally. We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew: brew install node brew install watchman If you have already installed Node on your system, make sure it is Node 8.3 or newer. Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.</div>
		<h3>Yarn</h3>
		<div>Please follow yarn official install guide. <Link href="https://yarnpkg.com/en/docs/install#mac-stable" /></div>
		<SetupiOS />
		<SetupAndroid />
		<SetupFolderStructure />
	</div>
}

export default Setup