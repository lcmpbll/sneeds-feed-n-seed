import React from 'react';
import Logo from '../../components/logo/Logo';
import './Footer.css';
import { AiOutlineMail } from 'react-icons/ai';
import { MdWarehouse } from 'react-icons/md';
import {SiHelpdesk} from 'react-icons/si';
import {AiOutlineWechat} from 'react-icons/ai';
import { BsPatchQuestion } from 'react-icons/bs';

function ContactInfo() {
  return(
      <div className='sneeds__footer section__padding'>
        <div className='sneeds__footer-content'>
          <div className='sneeds__footer-content_heading'>
            <Logo/>
          </div>
          <div className='sneeds__footer-content_contact'>
            <div className='sneeds__footer-content_contact-header'>
              <AiOutlineWechat/>
              <h3>Contact us:</h3>
            </div>
            <div className='sneeds__footer-content_contact-address'>
              <div>
                <MdWarehouse/>
                <h4>Address:</h4>
              </div>
              <p>13333 County Rd. 3
              <br/>Springfield IL 45552</p>
            </div>
            <div className='sneeds__footer-content_contact-email'>
              <AiOutlineMail/> 
              <p>sneeds@gmail.com</p>
            </div>
          </div>
          <div className='sneeds__footer-content_services'>
            <div className='sneeds__footer-content_services-header'>
              <SiHelpdesk/>
              <h3>Services</h3>
            </div>
            <div>
              <p>Inventory</p>
              <p>Buy</p>
              <p>Sell</p>
              <p>Store</p>
              <p>Feed</p>
              <p>Seed</p>
            </div>
          </div>
          <div className='sneeds__footer-content_services'>
            <div className='sneeds__footer-content_services-header'>
              <BsPatchQuestion/>
              <h3>Learn More</h3>
            </div>
            <div>
              <p>Terms & Services</p>
              <p>Privacy Policy</p>
              <p>Work With Us</p>
              <p>Our Board</p>
            </div>
          </div>
        </div>
      </div>
   
  )
}

export default ContactInfo