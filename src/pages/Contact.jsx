import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h1 className="contactusss">Contact Us</h1>
        <form>
          <div>
            <input className="contactussection" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>  
            <input className="contactussection" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)}/>
            <input className="contactussection2" placeholder="Leave us a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            
            <br />
            <button className="sendbutton" onClick={async (e) => {
                e.preventDefault();
                
                try {
                    // Validate fields are not empty
                    if (!email || !subject || !message) {
                        alert('Please fill in all fields');
                        return;
                    }

                    // Send data to backend
                    const response = await fetch('http://localhost:5500/api/contact', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, subject, message })
                    });

                    if (response.ok) {
                        alert('Message sent successfully!');
                        // Clear form fields
                        setEmail('');
                        setSubject('');
                        setMessage('');
                        // Still open email client as before
                        window.location.href = `mailto:shubhamdekhraw4@gmail.com?subject=${subject}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
                    } else {
                        alert('Error sending message');
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Error sending message');
                }
            }}>
                Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact