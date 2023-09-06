import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer>
    <div className="container container__footer">

        <div className="columen col_0">
<Link href="/">
    <h4 className="logo">Coursera</h4>
</Link>            
<p className="main_footer_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nam, sequi in voluptate sint rem, moles</p>
        </div>

        <div className="columen col_1">
            <h4>Permalinkes</h4>
            <ul className="permalinkes">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        </ul>
        </div>

        <div className="columen col_2">
            <h4>Privecy</h4>
            <ul className="permalinkes">
                <li><Link href="#">Privecy policey</Link></li>
                <li><Link href="#">Term and conditional</Link></li>
                <li><Link href="#">Refind policey</Link></li>
            </ul>
        </div>

        <div className="columen col_3">
            <h4>Contact us</h4>
            <p>+970597948137</p>
            <p className="email">khaled97nash@gmail.com</p>
            <div className="icon_footer">
                <Link href="#"> <i className="uil uil-facebook-f"></i></Link>
            <Link href="#"><i className="uil uil-instagram-alt"></i></Link>
            <Link href="#"><i className="uil uil-twitter"></i></Link>
               <Link href="#"> <i className="uil uil-linkedin-alt"></i></Link>
            </div>
        </div>
        
        </div>
        <div className="copy">
         <p>© copyRight by khaled nashwan</p> 
       </div>
    </footer>
    </>
  )
}

export default Footer