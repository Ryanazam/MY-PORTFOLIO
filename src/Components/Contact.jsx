import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast'
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dz7b2e4', 'template_p0vxxzi', form.current, 'gYBdo00o4YZ9wlgCA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          toast.success("Send Successfully")
          
      };
  return (
    <div className="contactus-form-containermain" id="contactme">
    <div className="-container">
      <h1 className="contactus-heading mar">
        Contact Me
      </h1>

      <h3 className="contact-sub-heading mar">
        Qustions,thoughts , or just want to say hello ?
      </h3>

           <div className="contactus-form-container">

            <form ref={form} onSubmit={sendEmail} >
             <div className="formfield-container">
              
              <input type="text" className="formfield" placeholder="Enter your name" name="from_name"  required/>
              <input type="email" className="formfield"  name="from_email" id="email" placeholder="Enter your Email"required/>
              <input type="text" name="subject" id="" className="formfield" placeholder="Enter your subject" required/>
            <textarea name="message" id="" cols="30" rows="10"
            className="text-area formfield" placeholder="Enter you message"required ></textarea>
        </div>

         <button type="submit" className="btn-pink" id="submit-btn" value="send">
          Send Message <i className="submit-icon fa-solid fa-paper-plane"></i>
         </button>

    
            </form>
           </div>


    </div>

  </div>
  )
}

export default Contact