import React, { useRef, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    
    // Add Web3Forms access key
    formData.append("access_key", "8f661251-38b6-4446-a4d5-383a28dab3a5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };
  return (
    <>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>sgmpdl@gmail.com</h5>
              <a href="mailto:sgmpdl@gmail.com" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Maheshwor Poudel</h5>
              <a href="https://m.me/sugam.poudel.96" target="_blank">
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>Whatsapp</h4>
              <h5>+9779813795441</h5>
              <a
                href="https://api.whatsapp.com/send?=+9779813795441"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>
          {/* End of Contact Option */}

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="hidden"
              name="subject"
              value="New Contact Form Submission from Portfolio"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              disabled={isSubmitting}
            ></textarea>
            
            {submitStatus === "success" && (
              <div className="submit-message success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="submit-message error-message">
                ✗ Failed to send message. Please try again or contact me directly via email.
              </div>
            )}
            
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
