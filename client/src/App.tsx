import { SetStateAction, useState } from 'react'
import './App.css'
import Alert from './components/Alert/Alert'
import Button from './components/Button2/Button'
import Card from './components/Card/Card'
import Grid from './components/GridLayout/GridFlexBox/Grid'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar-responsive/NavbarFullScreen/Navbar'
import NavbarV2 from './components/Navbar-responsive/NavbarHalfScreen/NavbarV2'
import Sidebar from './components/Navbar-responsive/Sidebar/Sidebar'
import Stepper from './components/Stepper.js/Stepper'
import Table from './components/Table/Table'
// import { Alert } from 'rebel-ui-kit'
// import { Button } from 'rebel-ui-kit'
import 'rebel-ui-kit/dist/styles.css'
import Box from './components/Box/Box'
import Collapsible from './components/Collapsible/Collapsible'
import CollapsibleV2 from './components/CollapsibleV2/Collapsible'
import Modal from './components/Modal/Model'
import { FlexColumn, FlexContainer, FlexRow } from './components/FlexGrid/FlexGrid'
import Pagination from './components/Pagination/Pagination'
import Carousel from './components/Carousel/Carousel'
import Carousel2 from './components/Carousel2/Carousel2'
import Carousel3 from './components/Carousel3/Carousel3'
function App() {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const handleClick = () => {
    setOpen(true)
  }
  const setOpenModal = (value: boolean) => {
    setOpen(value)
  }

  const handleChange = (page: SetStateAction<number>) => {
    console.log('fi')
    setCurrentPage(page)
  }
  const images = [
    'https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg',
    'https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg',
    'https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg',
    // Add more image URLs as needed
  ]

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10']
  return (
    <>
      <NavbarV2 />
      {/* <Carousel images={images} /> */}
      {/* <Carousel3 itemsPerView={3}>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel3> */}
      <Carousel2 />
      <Button label='submit' color='btn-outline-teal' type='btn' size='btn-lg' disabled={false} onClick={handleClick} />
      <Modal open={open} title='Modal' setOpenModal={setOpenModal}>
        Are You Sure You Want to Continue?
      </Modal>
      <Sidebar />
      <main style={{ marginTop: '30px' }}>
        <Pagination className='pagination-bar' totalCount={400} currentPage={currentPage} pageSize={8} onPageChange={handleChange} />
        <Stepper />
        <Loader />
        {/* <Button label='dd' /> */}
        <Alert status='success' message='s' disabled={false} />
        <Alert status='info' message='s' disabled={false} />
        <Alert status='error' message='s' disabled={true} />
        <FlexContainer>
          <FlexRow>
            <FlexColumn lg='3'>
              <Box>test1</Box>
            </FlexColumn>
            <FlexColumn lg='3'>
              <Box>test2</Box>
            </FlexColumn>
            <FlexColumn lg='3'>
              <Box>test1</Box>
            </FlexColumn>
            <FlexColumn lg='3'>
              <Box>test1</Box>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
        <Button label='submit' color='btn-outline-black' type='btn' size='btn-lg' disabled={false} onClick={handleClick} />
        <Button label='submit' color='btn-outline-teal' type='btn' size='btn-lg' disabled={false} onClick={handleClick} />
        <Button label='submit' color='btn-secondary' size='btn-lg' />
        <Button label='submit' color='btn-blue' size='btn-md' />
        <Button label='submit' color='btn-primary' size='btn-sm' />
        <Button label='submit' color='btn-secondary' size='btn-lg' />
        <Button label='submit' color='btn-success' size='btn-lg' />
        <Button label='submit' color='btn-warning' size='btn-lg' />
        <Button label='submit' color='btn-info' size='btn-lg' />
        <Button label='submit' color='btn-outline-primary' variant='outline' size='btn-lg' />
        <Button label='submit' color='btn-outline-secondary' variant='outline' size='btn-lg' />
        <Button label='submit' color='btn-outline-success' variant='outline' size='btn-lg' />
        <Button label='submit' color='btn-outline-warning' variant='outline' size='btn-lg' />
        <Button label='submit' color='btn-outline-info' variant='outline' size='btn-lg' />
        <Box borderRadius={0} shadow={2}>
          box
        </Box>
        <Collapsible title='Header'>eeeeee</Collapsible>
        <CollapsibleV2 title='Header'>eeeeee</CollapsibleV2>
        <Card />
        {/* <Table /> */}
        <Grid />
      </main>
    </>
  )
}

export default App
