import React from 'react';
import Link from '../../components/Link';

const SetupiOS = () => {
	return <>
		<h3>iOS Development Tools</h3>
		<div className="ml-5">
			<h3>XCode IDE</h3>
			<div>The easiest way to install XCode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app. If you have already installed XCode on your system, make sure it is version 9.4 or newer.</div>
			<h3>Command Line Tools</h3>
			<div>
				<div>You will also need to install the XCode Command Line Tools. Open XCode, then choose "Preferences..." from the XCode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.</div>
				<img alt="" src={require('../../assets/images/xcode.png')} />
			</div>
		</div>
		<h3>Installing an iOS Simulator in Xcode</h3>
		<div>To install a simulator, open Xcode &gt; Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use.</div>
		<h3>CocoaPods</h3>
		<div><Link href="https://cocoapods.org/">CocoaPods</Link> is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager; however, we recommend that you use the standard Ruby available on macOS unless you know what you're doing. Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.) sudo gem install cocoapods For more information, please visit CocoaPods Getting Started guide.</div>
	</>
}

export default SetupiOS
