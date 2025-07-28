import React, { useRef } from 'react'
import "./Contact.css";
import LinkedIn_icon from "../../Images/LinkedIn_icon.png";
import GitHub_icon from "../../Images/GitHub_icon.png";
import Whatsassp_icon from "../../Images/Whatsapp_icon.png";
import Gmail_icon from "../../Images/Gmail_icon.png";
import Call_icon from "../../Images/Call_icon.png";
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form=useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5c9f2bc', 'template_ibwcstv', form.current, {
        publicKey: 'hYOQJ8f3z02akj8Uj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  function openLinkedInProfile(){
    window.open("https://www.linkedin.com/in/mohamed-moamen-24033a221","_blank");
  }
  function openGitHubProfile(){
    window.open("https://github.com/MohamedMoamen","_blank");
  }
  function openWhatsAppProfile(){
    window.open("https://wa.me/201142933127","_blank");
  }

  return (
    <section id="contact">
        <h1 className="contact-title">
            Contact Me
        </h1>
        <span className="contact-description">please,fill out the form below to discuss any work opportunities</span>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="text" className="contact-form-name" placeholder="Your Name" name="your_name"/>
            <input type="email" className="contact-form-email" placeholder="Your Email" name="your_email"/>
            <textarea name="message" className="contact-form-message" rows="5" placeholder="Your Message" />
            <button type="submit" value="send" className="contact-form-button">Submit</button>
            <div className="contact-links">
                <img onClick={openLinkedInProfile} src={LinkedIn_icon} alt="" className="contact-links-icon"/>
                <img onClick={openGitHubProfile} src={GitHub_icon} alt="" className="contact-links-icon"/>
                <img onClick={openWhatsAppProfile} src={Whatsassp_icon} alt="" className="contact-links-icon"/>
            </div>
            <div className="contact-phoneandemail">
                <div className="contact-phoneandemail-iconandcontent">
                    <img src={Gmail_icon} alt="" className="contact-phoneandemail-icon"/>
                    <p className="contact-phoneandemail-content">mohamedmoamen96@gmail.com</p>
                </div>
                <div className="contact-phoneandemail-iconandcontent">
                    <img src={Call_icon} alt="" className="contact-phoneandemail-icon"/>
                    <p className="contact-phoneandemail-content">+201142933127</p>
                </div>
            </div>
        </form>
        
            


      
    </section>
  )
}

export default Contact