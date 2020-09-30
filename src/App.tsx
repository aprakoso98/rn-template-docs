import Content from './content';
import React from 'react';
import SideMenu from './SideMenu';


function App() {
  return <div id="app" className="flex w-full h-full">
    <SideMenu />
    <Content />
  </div>
}

export default App;
