import React from 'react'
import CardModel from './CardModel'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillBusFrontFill } from 'react-icons/bs'
import { BiLogoTelegram } from 'react-icons/bi'
import { AiOutlineGift, AiOutlineReload } from 'react-icons/ai'


const Card = () => {
  return (
    <>
    <Row className='pt-3 justify-content-center align-items-center'>
        <Col>
        <CardModel icone={<BsFillBusFrontFill />} Header="Free Shopping"   />
        </Col>

        <Col>
        <CardModel icone={<AiOutlineGift />} Header="Gift Card"   />
        </Col>

        <Col>
        <CardModel icone={<AiOutlineReload />} Header="7 Days Return"   />
        </Col>

        <Col>
        <CardModel icone={<BiLogoTelegram />} Header="Contact Us"   />
        </Col>
    </Row>

    </>
  )
}

export default Card