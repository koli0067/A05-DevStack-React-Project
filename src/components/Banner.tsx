const Banner = () => {
  return (
    <div className="container mx-auto">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="font-bold text-7xl pb-6 text-[#0F172A]">Build Your Ideal <br /> <span className="bg-gradient-to-r from-[#f8711d] to-[#8537e2] bg-clip-text text-transparent">
                    Development Stack </span> </h2>
                <p className="pb-8 text-[22px]">Explore frontend, backend, database, and tooling options,<br />
                compare them side by side, and put together the stack that fits your <br />
                next project.</p>
                <div className="flex gap-6">
                     <button className="bg-gradient-to-r from-[#f8711d] to-[#ef517f] to-90% text-white py-2 px-8 rounded-[10px] font-medium shadow-md transition-all duration-300 hover:opacity-90">
                      Explore Technologies</button>
                    <button className="border border-[#6b7b91] py-2 px-8 rounded-[10px] font-medium">Learn More</button>

                </div>

            </div>

            <img src={'/src/assets/banner-stack.png'} alt="" className="w-[700px]" />
        </div>
    </div>
  )
}

export default Banner