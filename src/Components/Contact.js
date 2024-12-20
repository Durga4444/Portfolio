import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.css';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiCodechef, SiLeetcode} from "react-icons/si"


const Contact = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // EmailJS template parameters
    const templateParams = {
      message: message,
      user_email: "durgabhuvaneshwari4444@gmail.com", // Your email address
    };

    // Send the email using the EmailJS service
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams, "YOUR_USER_ID")
      .then(
        (response) => {
          alert("Message sent successfully!");
          setMessage(""); // Clear the message field after sending
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="contactPage">
      <div className="contactHeading">
        <h2>Contact Me</h2>
      </div>

      <div className="socialLinks">
      <a href="https://leetcode.com/u/Bhuvaneshwari_/" target="_blank"><SiLeetcode/>LEETCODE</a>
      <br></br><br></br>
      <a href="https://github.com/Durga4444" target='_blank'><FaGithub/>   GITHUB</a>
            

             <a href="https://www.linkedin.com/in/bhuvaneshwari-s-9a543b261/" target='_blank'><FaLinkedin/>LINKEDIN</a>
             <a href='mailTo:durgabhuvaneshwari4444@gmail.com' target='_blank'>EMAIL<GrMail/></a>
             <a href="https://www.codechef.com/users/durgabhuvana" target="_blank">CODECHEF<SiCodechef></SiCodechef></a>
      </div>

      <div className="messageForm">
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Write your message here"
            required
          />
          <button type="submit" className="submitBtn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
