import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import { Home2 } from "./compenents/home";
import redIcon from "./assests/redIcon.png";

export const Home = () => {
    return (
        <>
            <div style={{
                backgroundColor: '#35569e',
                color: 'whitesmoke',
                width: '100%',
                padding: '35px 0px',
                fontSize: '20px'
            }} class="d-flex  justify-content-around " id="layout" >
                <div><h3 style={{
                    fontFamily: "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    fontSize: '30px',
                    textShadow: '1px 1px 1px black,4px 4px 4px black,5px 4px 2px black'
                }}>Green Space Academy</h3></div>
                <div><Link to="/" class='text-decoration-none link-light'>Home</Link></div>
                {/* <div><Link to='home'>Home</Link></div> */}
                <div><Link to="training" class='text-decoration-none link-light' >Training</Link></div>
                <div><Link to="course" class='text-decoration-none link-light'>Course contents</Link></div>
                <div><Link to="contact" class='text-decoration-none link-light'>Contact Us</Link></div>
                <div> <Link to="about" class='text-decoration-none link-light'>About Us</Link></div>
            </div>
            <div><Outlet />
            </div>
            <div style={{
                background: '#35569e',
                padding: '20px',
                color: 'white',
            }} className="footer" class='d-flex justify-content-between'>
                <div><h5>Address- </h5>
                    PS Rao Nagar,
                    Dammaiguda,
                    Secundrabad,
                    Telengana.
                    <h5><img src={redIcon} width={15} height='20px' style={{ backgroundColor: '#35569e' }} />&nbsp;<a href="https://goo.gl/maps/bWsJK8wieA5A4oZz7" target="_blank">Green space academy map</a></h5></div>
                <div style={{ padding: '25px 50px' }}> <h5> <Link to="contact" class='text-decoration-none link-light'>Contact Us</Link>
                    <span style={{ padding: '0px 50px' }}><Link to="about" class='text-decoration-none link-light'>About Us</Link></span></h5></div>
            </div>  </>

    )
}