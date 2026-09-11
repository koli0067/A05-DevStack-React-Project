import { useState } from "react";
import type { ITechProps } from "../../Type";
import SelectedCart from "./SelectedCart";
import ShowCart from "./ShowCart";

export interface TechCardsProps {
    techFetch: Promise<ITechProps[]>
}

const TechCards = ({ techFetch }: TechCardsProps) => {

    const [selectedStack, setSelectedStack] = useState<ITechProps[]>([]);

    
    return(
        <div className="container mx-auto mt-[80px] mb-[100px]">
            <div>
                <h2 className="text-4xl font-bold text-[#0F172A]">Explore the <span className=" bg-gradient-to-r from-[#d34db1] to-[#8537e2] bg-clip-text text-transparent">Technologies</span></h2>
                <p className="pt-4 text-[18px] text-slate-600">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
                <div className="lg:col-span-8 ">
                   <ShowCart selectedStack = {selectedStack} setSelectedStack = {setSelectedStack} techFetch ={techFetch}></ShowCart>
                </div>
                <div className="col-span-4">
                   <SelectedCart selectedStack = {selectedStack} setSelectedStack = {setSelectedStack}></SelectedCart>
                </div>
                
            </div>
            
        </div>
    ) 
}

export default TechCards;