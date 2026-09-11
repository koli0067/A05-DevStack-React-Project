import { use } from "react";
import type { ITechProps } from "../../Type";

export interface ShowCartProps {
    techFetch: Promise<ITechProps[]>;
}

const ShowCart = ({ techFetch }: ShowCartProps) => {

    const users = use(techFetch);  
    
    return (

        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 my-12">
        //     {users.map((user) => {
        //         return (
        //         <div
        //             key={user.id}
        //             className="group bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1
        //             transition-all duration-300 flex flex-col justify-between">
        //             <div>


        //             {/*  Icon & Category */}

        //             <div className="flex items-center justify-between mb-4">
        //                 <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl group-hover:scale-105 transition-transform duration-300">
        //                 <img
        //                     src={user.icon}
        //                     alt={user.techName}
        //                     className="w-10 h-10 object-contain"
        //                 />
        //                 </div>
        //                 <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
        //                 {user.category}
        //                 </span>
        //             </div>

        //             {/* Title & Description */}
        //             <h2 className="text-xl font-bold text-slate-900 mb-2">
        //                 {user.techName}
        //             </h2>
        //             <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-6">
        //                 {user.description}
        //             </p>
        //             </div>

        //             {/*Rating & Button */}
        //             <div className="pt-4 border-t border-slate-100">
        //             <div className="flex items-center justify-between mb-4">
        //                 <span className="text-xs text-slate-400 font-medium 
        //                    uppercase tracking-wider">Rating
        //                 </span>
        //                 <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2.5 py-1 rounded-lg">
        //                 <span className="text-amber-500 text-xs">⭐</span>
        //                 <span className="text-amber-900 text-xs font-bold">
        //                     {user.rating}
        //                 </span>
        //                 </div>
        //             </div>

        //             <button className="w-full bg-gradient-to-r from-[#f8711d] to-[#ef517f] text-white py-2.5 px-4 rounded-xl font-medium text-sm shadow-sm
        //              hover:shadow-md hover:opacity-95 active:scale-[0.98] transition-all duration-200">
        //                 {user.buttonText}
        //             </button>
        //             </div>
        //         </div>
        //         );
        //     })}
        // </div>





        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 my-12">
            {users.map((user) => {
                return (
                <div
                    key={user.id}
                    className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md
                     transition-shadow flex flex-col justify-between">

                    <div>

                        {/* Icon & Top Right */}
                        <div className="flex items-center justify-between mb-4">
                            <img
                            src={user.icon}
                            alt={user.techName}
                            className="w-9 h-9 object-contain"/>

                            {user.badge && (
                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-500">
                                {user.badge}
                            </span>
                            )}
                        </div>

                        {/* 2. Title */}
                        <h2 className="text-xl font-bold text-slate-900 mb-2">
                            {user.techName}
                        </h2>

                        {/* 3. Description */}
                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                            {user.description}
                        </p>
                    </div>

                        <div>
                        {/* 4. Tags & Star Rating Row */}
                        <div className="flex items-center justify-between mb-4">
                          
                                <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                                    {user.category}
                                </span>
                                <span className="text-xs text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                                    {user.level}
                                </span>


                                <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
                                    <span className="text-amber-400">★</span>
                                    <span>{user.rating}</span>
                               </div>
                            </div>

                            
                        </div>

                        
                        <button className="w-full bg-[#0b1320] hover:bg-[#162235] text-white py-2.5 rounded-xl text-sm font-medium transition-colors">
                            {user.buttonText || "Add to Stack"}
                        </button>
                        </div>
                );
            })}
        </div>


    )
}

export default ShowCart;