import React from 'react';
import Code from '../../components/Code';
import Link from '../../components/Link';

const SetupAndroid = () => {
	return <>
		<h3>Android Development Tools</h3>
		<div className="ml-5">
			<h3>Java Development Kit</h3>
			<div>We recommend installing JDK using Homebrew. Run the following commands in a Terminal after installing Homebrew: brew cask install adoptopenjdk/openjdk/adoptopenjdk8 If you have already installed JDK on your system, make sure it is JDK 8 or newer.</div>
			<h3>Setup Android Development Environment</h3>
			<ol>
				<li>
					<div>Install Android Studio</div>
					<ul>
						<li>Download and install <Link href="https://developer.android.com/studio/index.html">Android Studio</Link>. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:</li>
						<li>Android SDK</li>
						<li>Android SDK Platform</li>
						<li>Performance (Intel ® HAXM) (<Link href="https://android-developers.googleblog.com/2018/07/android-emulator-amd-processor-hyper-v.html">See here for AMD or Hyper-V</Link>)</li>
						<li>Android Virtual Device</li>
						<li>Then, click "Next" to install all of these components. If the checkboxes are grayed out, you will have a chance to install these components later on. Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.</li>
					</ul>
				</li>
				<li>
					<div>Install the Android SDK</div>
					<div>Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio. The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".</div>
					<img alt="" src={require('../../assets/images/android-studio.png')} />
					<div>The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK. Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:</div>
					<ul>
						<li>Android SDK Platform 28</li>
						<li>Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image</li>
						<li>Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected. Finally, click "Apply" to download and install the Android SDK and related build tools.</li>
					</ul>
				</li>
				<li>
					<div>Configure the ANDROID_HOME environment variable</div>
					<div>The React Native tools require some environment variables to be set up in order to build apps with native code.</div>
					<div>Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc config file:</div>
					<ul>
						<li><Code>export ANDROID_HOME=$HOME/Library/Android/sdk</Code></li>
						<li><Code>export PATH=$PATH:$ANDROID_HOME/emulator</Code></li>
						<li><Code>export PATH=$PATH:$ANDROID_HOME/tools</Code></li>
						<li><Code>export PATH=$PATH:$ANDROID_HOME/tools/bin</Code></li>
						<li><Code>export PATH=$PATH:$ANDROID_HOME/platform-tools</Code></li>
					</ul>
					<div><Code>.bash_profile</Code> is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.</div>
					<div>Type  source <Code>$HOME/.bash_profile</Code> to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running <Code>echo $PATH</Code>.</div>
				</li>
			</ol>
		</div>
	</>
}

export default SetupAndroid
