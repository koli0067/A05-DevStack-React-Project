import footer from '../assets/logo-text.png'

const Footer = () => {
  return (
    <div className="container mx-auto mt-8">
        <div className=" flex justify-between flex-wrap gap-8">
            <div>
               <img src={footer} alt="logo" className="pb-3" />
               <p className="text-[#475569] text-[18px]">Curated tools, technologies, and resources for developers building <br />
               modern software.</p>
               <ul className='flex gap-5 mt-4 text-[18px] text-[#475569] font-semibold'>
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
               </ul>
            </div>

            <div>
               <p  className="text-[#0F172A] pb-3 text-[22px] font-semibold">PRODUCT</p>

               <ul className="text-[18px] text-[#475569] leading-9">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Technologies</a></li>
                    <li><a href="#">Projects</a></li>
               </ul>
            </div>

            <div> 
                <p  className="text-[#0F172A] pb-3 text-[22px] font-semibold">COMPANY</p>

                 <ul className="text-[18px] text-[#475569] leading-9">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Careers</a></li>
               </ul>

            </div>
            
            <div>
                <p  className="text-[#0F172A] pb-3 text-[22px] font-semibold">LEGAL</p>

                <ul className="text-[18px] text-[#475569] leading-9">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            
        </div>
        <div className="flex justify-between items-center py-8 mt-9 text-[#475569]">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <ul className="flex justify-center flex-wrap gap-5 text-[18px]">
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer