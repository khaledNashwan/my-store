import React from 'react'
import Slide from '../components/Home/Slide'
import { Container, Row } from 'react-bootstrap'
import Card from '../components/Home/Card'
import CardBooks from '../components/Home/CardBooks'


const Home = () => {
  return (
    <>
    <Row className='slide'>
    <Slide />
    </Row>
    <Container>
    <Row className='Card'>
    <Card/>
    </Row>
    </Container>
    <Container>

    <Row className='mt-4'>
      <p className='fw-bold fs-3  '>Most Gifted</p>
    </Row>
    </Container>
    <Row className='CardBooks'>
    <CardBooks />
    </Row>

    <Container>

    <Row className='mt-4'>
      <p className='fw-bold fs-3  '>Most wished</p>
    </Row>
    </Container>
    <Row className='CardBooks'>
    <CardBooks />
    </Row>
    </>
  )
}

export default Home