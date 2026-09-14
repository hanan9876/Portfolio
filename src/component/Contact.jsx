import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Reveal } from './Reveal';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xkowkqqd");

  if (state.succeeded) {
    return (
      <section className="flex items-center justify-center mt-32 text-white">
        <h2 className="text-2xl font-bold animate-fade-in-up">
          ✅ Message sent successfully!
        </h2>
      </section>
    );
  }

  const inputClass =
    'p-2 w-full rounded-xl bg-[#1F1924] border border-transparent outline-none transition-all duration-300 focus:border-[#8c47d1] focus:shadow-[0_0_0_3px_rgba(140,71,209,0.25)]';

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

        <Reveal className='flex flex-col'>
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
        </Reveal>

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
          <Reveal variant="left" delay={1} className='w-full lg:w-1/2'>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col items-start w-full'
            >
              <label>Name</label>
              <input
                required
                name="name"
                className={`${inputClass} mt-2 mb-5`}
                type="text"
                placeholder='Your Name'
              />

              <label>Email</label>
              <input
                required
                name="email"
                className={`${inputClass} mt-2 mb-1`}
                type="email"
                placeholder='Your Email'
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label className="mt-4">Message</label>
              <textarea
                required
                name="message"
                className={`${inputClass} mt-2 mb-1 h-28 sm:h-30`}
                placeholder='Tell me about your project'
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button
                type='submit'
                disabled={state.submitting}
                className='
                  hover-glow
                  p-2
                  mt-4
                  w-full
                  text-white
                  bg-linear-to-r
                  from-[#9E49C5]
                  to-[#DC519B]
                  rounded-xl
                  cursor-pointer
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                '
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Reveal>

          <Reveal variant="right" delay={2} className='flex flex-col w-full lg:w-1/2 gap-6'>
            <div className='bg-[#1F1924] p-6 flex items-start flex-col rounded-xl border border-transparent card-lift hover:border-[#8c47d180]'>
              <h3 className='text-white text-xl sm:text-2xl font-bold'>
                Contact Information
              </h3>

              <br />

              <div className='flex items-center gap-6 mb-5 group'>
                <a className='text-white p-3 text-xl sm:text-2xl bg-[#2E2735] rounded-xl transition-all duration-300 hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B] group-hover:scale-110'
                   href="mailto:hananarshad604@gmail.com">
                  <MdOutlineEmail />
                </a>
                <div className='flex flex-col items-start'>
                  <h4 className='text-[#8C8595] text-sm'>Email</h4>
                  <a className='transition-colors duration-300 hover:text-[#DC519B]' href="mailto:hananarshad604@gmail.com">
                    hananarshad604@gmail.com
                  </a>
                </div>
              </div>

              <div className='flex items-center gap-6 mb-5 group'>
                <a className='text-white p-3 text-xl sm:text-2xl bg-[#2E2735] rounded-xl transition-all duration-300 hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B] group-hover:scale-110'
                   href="https://wa.me/+923269854397">
                  <FaPhoneAlt />
                </a>
                <div className='flex flex-col items-start'>
                  <h4 className='text-[#8C8595] text-sm'>Phone</h4>
                  <a className='transition-colors duration-300 hover:text-[#DC519B]' href="https://wa.me/+923269854397">03269854397</a>
                </div>
              </div>

              <div className='flex items-center gap-6 group'>
                <a className='text-white p-3 text-xl sm:text-2xl bg-[#2E2735] rounded-xl transition-all duration-300 hover:bg-linear-to-r from-[#9E49C5] to-[#DC519B] group-hover:scale-110'>
                  <IoLocationSharp />
                </a>
                <div className='flex flex-col items-start'>
                  <h4 className='text-[#8C8595] text-sm'>Address</h4>
                  <a href="">Lahore, Punjab</a>
                </div>
              </div>
            </div>

            <div className='bg-[#1F1924] p-6 flex items-start flex-col rounded-xl border border-transparent card-lift hover:border-[#8c47d180]'>
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
          </Reveal>

        </div>
      </section>
    </div>
  )
}
