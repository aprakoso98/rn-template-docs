import React from 'react';
import Code from '../components/Code';
import Link from '../components/Link';

const Running = () => {
	return <div id="running">
		<h1>Running your React Native application</h1>
		<div className="ml-5">
			<div>Firstly, inside your React Native project folder, you need to run <Code>yarn install</Code> to install all the required packages of the apps</div>
			<h3>Running on a simulator</h3>
			<div>Run <Code>react-native run-ios</Code> or <Code>react-native run-android</Code></div>
			<h3>Running on a device</h3>
			<div>The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions <Link href="https://facebook.github.io/react-native/docs/running-on-device">Running On Device</Link>.</div>
		</div>
	</div>
}

export default Running