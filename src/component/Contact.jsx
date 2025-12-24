import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export const Contact = () => {
  const [state, handleSubmit] = useForm("xkowkqqd");

  if (state.succeeded) {
    return (
      <section className="flex items-center justify-center mt-32 text-white">
        <h2 className="text-2xl font-bold">
          ✅ Message sent successfully!
        </h2>
      </section>
    );
  }

  return (
    <div>
      <section
        id='contact'
        className='
          flex 
          flex-col 
          items-center 
          justify-center 
          text-center 
          gap-6 
          mt-20 
          sm:mt-24 
          lg:mt-30 
          px-4 
          sm:px-6 
          lg:px-23
        '
      >

        <div className='flex flex-col'>
          <h1 className='
            text-3xl 
            sm:text-4xl 
            lg:text-5xl 
            font-bold 
            text-[#F2F1F4] 
            leading-snug
          '>
            Get In{' '}
            <span className='bg-linear-to-r from-[#9E49C5] to-[#DC519B]'>
              Touch
            </span>
          </h1>

          <p className='text-base sm:text-lg text-[#8C8595]'>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className='
          flex 
          flex-col 
          lg:flex-row 
          items-start 
          w-full 
          text-white 
          font-normal 
          gap-8 
          lg:gap-10
        '>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-start w-full lg:w-1/2'
          >
            <label>Name</label>
            <input
              required
              name="name"
              className='p-2 mt-2 mb-5 w-full rounded-xl bg-[#1F1924]'
              type="text"
              placeholder='Your Name'
            />

            <label>Email</label>
            <input
              required
              name="email"
              className='p-2 mt-2 mb-1 w-full rounded-xl bg-[#1F1924]'
              type="email"
              placeholder='Your Email'
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label className="mt-4">Message</label>
            <textarea
              required
              name="message"
              className='p-2 mb-1 mt-2 w-full rounded-xl bg-[#1F1924] h-28 sm:h-30'
              placeholder='Tell me about your project'
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button
              type='submit'
              disabled={state.submitting}
              className='
                p-2 
                mt-4
                w-full 
                text-white 
                bg-linear-to-r 
                from-[#9E49C5] 
                to-[#DC519B] 
                rounded-xl
                disabled:opacity-60
              '
            >
              Send Message
            </button>
          </form>

          <div className='flex flex-col w-full lg:w-1/2 gap-6'>
            <div className='bg-[#1F1924] p-6 flex items-start flex-col rounded-xl'>
              <h3 className='text-white text-xl sm:text-2xl font-bold'>
                Contact Information
              </h3>

              <br />

              <div className='flex items-center gap-6 mb-5'>
                <a className='text-white p-3 text-xl sm:text-2xl bg-[#2E2735] rounded-xl hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B]'
                   href="mailto:hananarshad604@gmail.com">
                  <MdOutlineEmail />
                </a>
                <div className='flex flex-col items-start'>
                  <h4 className='text-[#8C8595] text-sm'>Email</h4>
                  <a href="mailto:hananarshad604@gmail.com">
                    hananarshad604@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-6 mb-5'>
                <a className='text-white p-3 text-xl sm:text-2xl bg-[#2E2735] rounded-xl hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B]'
                   href="https://wa.me/+923269854397">
                  <FaPhoneAlt />
                </a>
                <div className='flex flex-col items-start'>
                  <h4 className='text-[#8C8595] text-sm'>Phone</h4>
                  <a href="">03269854397</a>
                </div>
              </div>

              <div className='flex items-center gap-6'>
                <a className='text-white p-3 text-xl sm:text-2xl bg-[#2E2735] rounded-xl hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B]'>
                  <IoLocationSharp />
                </a>
                <div className='flex flex-col items-start'>
                  <h4 className='text-[#8C8595] text-sm'>Address</h4>
                  <a href="">Lahore, Punjab</a>
                </div>
              </div>
            </div>

            <div className='bg-[#1F1924] p-6 flex items-start flex-col rounded-xl'>
              <h3 className='text-white text-xl sm:text-2xl font-bold'>
                Let's Build Something Amazing
              </h3>

              <br />

              <p className='text-[#8C8595] text-sm sm:text-md'>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll do my best to
                get back to you!
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
