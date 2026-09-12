import logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <div className="container mx-auto border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="flex justify-between items-center py-6 ">
            <img src={logo} alt="" /> 
           

           <ul className="flex sm:flex-none justify-center gap-5 text-[#475569] text-[20px] font-[400]">
                <li className="text-[#d91b7e]">Home</li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
           </ul>

           <div className="flex justify-center gap-5">
               <button className="font-normal text-[20px]">Sign In</button>
               <button className="bg-[#d91b7e] font-normal text-[20px]
                text-white outline-0 py-2 px-6 rounded-[50px]">Sign Up</button>
           </div>

        </div>
    </div>
  )
}

export default Nav