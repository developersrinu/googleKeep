import React, { useState } from 'react'
import Header from './Components/Header';
import SideNav from './Components/SideNav';
import Main from './Components/Main';
const App = () => {

 
  return (

    <div >
      <Header/>
      <div style={{ display: 'flex', marginTop: '100px', justifyContent: 'space-between' }}>
        <SideNav />
        <Main />
      </div>

    </div>
  )
}

export default App
