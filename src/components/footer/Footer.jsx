import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div>
      {/* container  */}
      <div className="grid grid-cols-12 grid-rows-3 text-white">
        <div className="md:col-span-6 col-span-full h-[300px] bg-[#1F2937] grid justify-center items-center">
            <div>
                <h1 className='text-xl uppercase mb-3'>Contact Us</h1>
                <address>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </address>
            </div>
        </div>
        <div className="md:col-span-6 col-span-full h-[300px] bg-[#111827] grid justify-center items-center">
            <div>
                <h1 className='text-xl uppercase mb-3'>Follow US</h1>
                <p>Join us on social media</p>
                <div className='flex gap-4 text-2xl items-center mt-3'>
                    <FaFacebookF/>
                    <FaInstagram/>
                    <AiOutlineTwitter/>
                </div>
            </div>
        </div>
        <div className="col-span-full h-[50px] bg-black grid items-center">
            <p className='text-center text-sm'>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
