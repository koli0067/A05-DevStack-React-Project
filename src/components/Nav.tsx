import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/logo-text.png';
import { useState } from 'react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="container mx-auto flex justify-between items-center py-6 ">

        <div
          onClick={()=> setIsOpen(!isOpen)}
          className='lg:hidden font-semibold text-[30px] cursor-pointer z-50'>
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>

            <img src={logo} alt="logo" /> 
           

           <ul className="hidden lg:flex justify-center gap-5 text-[#475569] text-[20px] font-[400]">
                <li className="text-[#d91b7e]">Home</li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
           </ul>

           <div className="flex justify-center gap-5">
               <button className="font-normal md:text-[20px] text-[14px] border-0">Sign In</button>
               <button className="bg-[#d91b7e] font-normal md:text-[20px] text-[14px]
                text-white outline-0 md:py-2 py-1 px-4 md:px-6 rounded-[50px]">Sign Up</button>
           </div>

          <div
              className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl p-8 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}>
              <ul className="flex flex-col gap-6 text-[#475569] text-[20px] font-[400] mt-16">
                <li className="text-[#d91b7e]" onClick={() => setIsOpen(false)}>Home</li>
                <li><a href="#" onClick={() => setIsOpen(false)}>Technologies</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)}>Projects</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
              </ul>
          </div>

        </div>
    </nav>
  )
}

export default Nav