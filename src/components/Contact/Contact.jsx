import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "1613edfa-fb33-47bb-8c75-56cdd194c999");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((response) => response.json());
        if (response.success) {
            alert(response.message);
        }
      };
    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contact Us</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" />
                            <p>pritam.cse2014@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>01311003738</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>Mirpur-2, Dhaka Bangladesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right" action="">
                    <label htmlFor="">Enter Your Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name" />
                    
                    <label htmlFor="">Enter Your Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email" />

                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" id="message" rows={8} placeholder="Enter Your Message...."></textarea>

                    <button className="contact-submit" type="submit">Submit Now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;