import { Link } from "react-router-dom"
import "./Contact.css";

function Contact() {
  
    return (
        <>
            <p>Want to get in touch?</p>
            <div class="card">
                <form>
                    <label for="name">Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="John Doe" /><br />
                    <label for="email">Email:</label><br />
                    <input type="text" id="email" name="email" placeholder="you@domain.com" /><br />
                    <label for="message">Message:</label><br />
                    <textarea type="text" id="message" name="message" rows="2" value="check out this guy's message..."/><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <Link to={'/'}>Home Page</Link>
        </>
    );
}

export default Contact;
