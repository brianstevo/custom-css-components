import { useState } from 'react'
import './App.css'
import Alert from './components/Alert/Alert'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Grid from './components/GridLayout/GridFlexBox/Grid'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar-responsive/NavbarFullScreen/Navbar'
import NavbarV2 from './components/Navbar-responsive/NavbarHalfScreen/NavbarV2'
import Stepper from './components/Stepper.js/Stepper'
function App() {
  return (
    <>
      <NavbarV2 />
      <main style={{ marginTop: '30px' }}>
        <Stepper />
        <Loader />
        <Button />
        <Alert />
        <Card />
        <Grid />
      </main>
    </>
  )
}

export default App
