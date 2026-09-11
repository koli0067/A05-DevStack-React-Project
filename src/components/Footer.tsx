

const Footer = () => {
  return (
    <div className="container mx-auto">
        <div className=" flex justify-between">
            <div>
               <img src={'/src/assets/logo-text.png'} alt="" className="pb-3" />
               <p className="text-[#475569] text-[18px]">Curated tools, technologies, and resources for developers building <br />
               modern software.</p>
               <h2 className="text-[#1e2228] pt-3 text-[18px]">GitHub   Twitter   LinkedIn</h2>
            </div>
            <ul className="text-[18px] text-[#475569]">
                <p  className="text-[#0F172A] pb-3 text-[22px] font-semibold">PRODUCT</p>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
            </ul>
             <ul className="text-[18px] text-[#475569]">
                <p  className="text-[#0F172A] pb-3 text-[22px] font-semibold">COMPANY</p>
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
            <ul className="text-[18px] text-[#475569]">
                <p  className="text-[#0F172A] pb-3 text-[22px] font-semibold">LEGAL</p>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
        </div>
        <div className="flex justify-between items-center py-8 mt-9 text-[#475569]">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <ul className="flex justify-center gap-5 text-[18px]">
                <li>Privacy</li>
                <li>Terms</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer