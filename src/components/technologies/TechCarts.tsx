import type { ITechProps } from "../../Type";
import ShowCart from "./ShowCart";

export interface TechCartsProps {
    techFetch: Promise<ITechProps[]>
}

const TechCarts = ({ techFetch }: TechCartsProps) => {
    
    return(
        <div className="container mx-auto mt-[80px]">
            <div>
                <h2 className="text-4xl font-bold text-[#0F172A]">Explore the <span className=" bg-gradient-to-r from-[#d34db1] to-[#8537e2] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="pt-4 text-[18px] text-slate-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
                <ShowCart techFetch ={techFetch}></ShowCart>
            </div>
            
        </div>
    ) 
}

export default TechCarts;