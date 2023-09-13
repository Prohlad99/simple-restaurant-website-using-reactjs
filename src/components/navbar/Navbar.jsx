import { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { RxHamburgerMenu } from 'react-icons/rx';
import { VscChromeClose } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <div>
      {/* container  */}
      <nav className='flex fixed z-10 w-full opacity-60 justify-between h-[75px] bg-black items-center  text-white'>
        {/* logo  */}
        <div className='flex-col justify-center pl-4'>
            <Link to="/">
                <h1 className='text-2xl font-semibold'>BISTRO BOSS</h1>
                <p className='tracking-[6px] uppercase'>Restaurant</p>
            </Link>
        </div>

        {/* nav link  */}
        <div className={`absolute md:static top-[75px]  md:top-0 bg-black md: w-[70%] flex justify-center md:justify-end py-4 border-t-[2px] md:border-none border-green-600 md:pr-4 ${isMenuOpen?"left-0":"left-[-100%]"} ease-in-out duration-300 shadow-lg md:shadow-none`}>
            <ul className='flex flex-col gap-4 md:flex-row'>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li>
                   <Link to="/dashboard">
                         Dashboard
                   </Link>
                </li>
                <li>
                    <Link to="/menu">
                        Our Menu
                    </Link>
                </li>
                <li>
                    <Link to="/shop/salad">
                        Our Shop
                    </Link>
                </li>
                <li>
                    <div className='flex items-center relative h-[20px] w-[20px] '>
                        <Link to="/cart">
                            <span className='text-xl'><BsCart3/></span>
                            <span className='absolute -top-4 -right-4 text-sm w-[20px] h-[20px] rounded-full bg-blue-600 text-center'>01</span>
                        </Link>
                    </div>
                </li>
                <li>
                    <div className='flex items-center gap-2 md:mb-3'>
                        <Link to="/sign-in"><button>Sign In</button></Link>
                        <img className='h-[25px] w-[25px] rounded-full border-[2px] border-blue-700' src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
                    </div>
                </li>
            </ul>
        </div>

        {/* hamburger */}
        <div className='md:hidden pr-4'>
            <button onClick={()=>handleMenu()} className='text-2xl'>{isMenuOpen?<VscChromeClose/>:<RxHamburgerMenu/>} </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
