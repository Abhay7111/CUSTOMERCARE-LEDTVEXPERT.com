import React from 'react'

function Contact() {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<div className=' w-full text-center mt-5'>Sending... <i class="ri-mail-send-line text-blue-500"></i></div>);
    const formData = new FormData(event.target);

    formData.append("access_key", "8b3cd706-44c5-4e8c-918d-818d4c87b935");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<div className=' w-full text-center mt-5'>Done <i class="ri-check-double-line text-green-500"></i></div>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contactus' className='flex flex-col gap-20 sm:gap-20 px-5 sm:flex sm:items-start sm:flex-row sm:justify-center mt-20'>
     <div className='w-full sm:w-1/2 flex-col flex sm:items-end'>
          <h1 className='text-2xl sm:text-end font-medium'><span className='text-[#FBC61E]'>OUR</span> ADDRESS</h1>
          <ul className='mt-6 flex flex-col sm:items-end'>
               <a href="tel:+918421119417"><li className='w-fit pl-2 pr-5 border-b border-dashed border-zinc-800 py-3 text-zinc-500'><i class="ri-phone-line text-[#FBC61E]"> </i><span className='font-medium text-zinc-600'>Call Us :</span> +91-8421119417</li></a>
               <a href="mailto:vishwaxupte@gmail.com"><li className='w-fit pl-2 pr-5 border-b border-dashed border-zinc-800 py-3 text-zinc-500'><i class="ri-mail-line text-[#FBC61E]"> </i><span className='font-medium text-zinc-600'>Email Us :</span> vishwaxupte@gmail.com</li></a>
               <a href="148, Kasba Peth, Opp. Peshwa Ganpati,Lal Mahal Chowk,Pune-411011"><li className='w-fit pl-2 pr-5 border-b border-dashed border-zinc-800 py-3 text-zinc-500'><i class="ri-map-2-line text-[#FBC61E]"> </i><span className='font-medium text-zinc-600'>Bhudhwar Peth Pune - 411002</span></li></a>
          </ul>
     </div>
     <div className='sm:flex sm:flex-col sm:w-1/2'>
     <h1 className='text-2xl font-medium w-full'><span className='text-[#FBC61E]'>SEND US </span>A MESSAGE</h1>
     <div className='mt-8 sm:w-1/2'>
      <form onSubmit={onSubmit} className='flex flex-col gap-5 items-center'>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="text" name="name" required placeholder='Enter Name'/>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="tel" name="Phone" pattern="[+91]{3} [0-9]{10}" required placeholder='+91 1234567890'/>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="email" name="Email" required placeholder='user@mydomain.com'/>
        <input className='border border-zinc-400 px-2 py-2 w-full outline-none' type="text" name="Subject" required placeholder='Your problem'/>
        <textarea className='border border-zinc-400 px-2 py-2 w-full outline-none' name="Message" placeholder='Enter Message (optional)'></textarea>

        <button onClick="https://plick.netlify.com" type="submit" className='py-2 px-8 bg-[#FBC61E] text-zinc-800 text-sm font-medium w-fit outline-none'>Send Your Message</button>

      </form>
      <span>{result}</span>

    </div>
     </div>
    </div>
  )
}

export default Contact