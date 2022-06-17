import React, {useState} from 'react'


export default function Contact() {

 
    const [msg, setMsg] = useState({
      name: "",
      email: "",
      message: "",
    });
    //handleInputs
    const handleInput = (event) => {
      let name = event.target.name;
      let value = event.target.value;
  
      setMsg({ ...msg, [name]: value });
    };
    //handleSubmit
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { name, email, message } = msg;
      try {
        const res = await fetch("/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,email,   message,
          }),
        });
        if (res.status === 400 || !res) {
          window.alert("Message Not Sent. Try again later.");
        } else {
          window.alert("Message sent!!");
          setMsg({
            name: "",
            email: "",
            message: "",

          })
          
        }
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div>
        <section id="contact">
            <div className="container my-5 py-5">
                <div className="row mb-5">
                    <div className="col-12">
                        <h3 className="fs-5 text-center">Contact Us</h3>
                        <h1 className='display-6 text-center mb-4'> 
                        Have some <b> Question?</b></h1>
                        <hr className='w-25 mx-auto'/>
                    </div>
                
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                                    <img src="/assets/contact.jpg"  alt="contact" className='w-75' />  
                                </div>
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit} method="POST">
                        
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="form-control" id="name" name='name' value={msg.name} onChange={handleInput} placeholder="enter you name..."/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Your Email</label>
                                    <input type="email" className="form-control" id="email" name='email' value={msg.email} onChange={handleInput} placeholder="enter you email..."/>
                                </div>
               
                                <div className="form-group">
                                    <label htmlFor="message">Your message</label>
                                    <textarea className="form-control" id="message" name='message' value={msg.message} onChange={handleInput} rows="5"></textarea>
                                </div>
                            <button type='submit' className='btn btn-outline-success rounded-pill px-4'>Send Message
                             <i className='fa fa-paper-plane ms-2'></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
