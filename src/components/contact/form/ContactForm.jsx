import { BiMailSend } from 'react-icons/bi';
import captcha from '../../../assets/contact/captcha.png';
import './style.css';
const ContactForm = () => {
    const handleMessageSend=(e)=>{
        e.preventDefault();
    }
  return (
    <div className="mx-3 md:mx-0 mb-28 mt-10">
      {/* container  */}
      <form className="form-container md:w-[600px] pt-8 mx-auto rounded-md bg-slate-200 grid grid-cols-12 gap-4 justify-center p-4">
        {/* name  */}
        <div className="md:col-span-6 col-span-full">
          <label htmlFor="name">Name*</label>
          <br />
          <input
            className="w-full py-2 px-4 rounded-sm outline-none mt-1"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        {/* phone  */}
        <div className="md:col-span-6 col-span-full">
          <label htmlFor="phone">Phone*</label>
          <br />
          <input
            className="w-full py-2 px-4 rounded-sm outline-none mt-1"
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
          />
        </div>

        {/* email  */}
        <div className="col-span-full">
          <label htmlFor="email">Email*</label>
          <br />
          <input
            className="w-full py-2 px-4 rounded-sm outline-none mt-1"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        {/* textarea  */}
        <div className="col-span-full">
          <label htmlFor="message">Message*</label>
          <br />
          <textarea
            className="w-full py-2 px-4 rounded-sm outline-none mt-1"
            name="message"
            id="message"
            cols="30"
            rows="6"
            placeholder="Write you message here..."
          ></textarea>
        </div>

        {/* check robot */}
        <div className="col-span-full">
          <div className="flex gap-2 justify-start items-center bg-stone-50 w-[200px] py-1 px-3 rounded-sm">
            <input type="checkbox" id="human" name="human" value="human" />
            <label className="" htmlFor="human">
              {" "}
              I&apos;m not a robot
            </label>
            <img src={captcha} className="w-[40px]" alt="" />
          </div>
        </div>

        <div className="col-span-full flex justify-end">
          <button
            onClick={(e) => handleMessageSend(e)}
            className="border-b-2 py-1 px-3 hover:bg-blue-700 ease-in-out duration-300 hover:text-white border-blue-700 rounded-lg flex gap-1 justify-center items-center"
          >
            <p>Send Message</p>
            <span className="text-2xl">
              <BiMailSend />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm
