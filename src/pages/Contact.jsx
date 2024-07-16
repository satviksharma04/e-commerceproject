import React from 'react';
import mail_icon from '../assets/mail-icon.png';
import insta_icon from '../assets/insta-icon.png';
import linkedin_icon from '../assets/linkedin-icon.png';
import location_icon from '../assets/location-icon.png';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d915e824-23fa-4e14-93ab-ce1c47dca24e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact m-8 font-semibold  md:flex items-center justify-between gap-8'>
      <div className="flex-col basis-5/12">
        <h2 className='gcol my-3 text-3xl flex '>Send us a Message </h2>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us .</p>
        <ul>
          <li className='flex m-8 gap-3 '><img className='w-8' src={mail_icon} alt="" />23bee092@nith.ac.in</li>
          <li className='flex m-8 gap-3 '><img className='w-8' src={linkedin_icon} alt="" /><a href="https://www.linkedin.com/in/satviksharma04">Linkedin</a></li>
          <li className='flex m-8 gap-3 '><img className='w-8' src={insta_icon} alt="" /><a href="https://www.instagram.com/_satvik.sharma">Instagram</a></li>
          <li className='flex m-8 gap-3 '><img className='w-8' src={location_icon} alt="" />National Insitute of Technology, <br />Hamirpur</li>
        </ul>
      </div>
      <div className="flex-col justify-center items-center basis-5/12">
        <form onSubmit={onSubmit} >
          <label className='mt-2'>Your name</label>
          <input className='block mr-3 bg-zinc-800 rounded-md p-2 my-3 text-white w-72' type="text" name='name' placeholder='Enter your name' required />
          <label className='mt-2'>Email</label>
          <input className='block mr-3 bg-zinc-800 rounded-md p-2 my-3 text-white w-72' type="email" name='email' placeholder='Enter your email' required />
          <label className='mt-2'>Write your messages here</label>
          <textarea className='block mr-3 bg-zinc-800 rounded-md p-2 my-3 text-white w-72 resize-none' name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='bg-blue-600 text-white px-5 py-3 rounded-md'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
