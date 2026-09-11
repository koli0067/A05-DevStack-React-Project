import { use, type Dispatch, type SetStateAction } from "react";
import { GiCheckMark } from "react-icons/gi";
import type { ITechProps } from "../../Type";

export interface ShowCartProps {
    techFetch: Promise<ITechProps[]>;
    selectedStack: ITechProps[];
    setSelectedStack: Dispatch<SetStateAction<ITechProps[]>>
}

const ShowCart = ({ techFetch, selectedStack, setSelectedStack }: ShowCartProps) => {

    const users = use(techFetch);  

     const handleAdd = (user: ITechProps) => {
        const isAlreadyAdded = selectedStack.some((item) => item.id === user.id);

        if (!isAlreadyAdded) {
        setSelectedStack([...selectedStack, user]);
        }
    };
    
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 my-12">

            {users.map((user) => {

                const isAdded = Boolean (selectedStack.some((item) => item.id === user.id));
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

                    <button
                            onClick={() => handleAdd(user)}
                            disabled={isAdded}
                            className={`w-full py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                                isAdded
                                    ? "bg-[#fef2f2] text-[#d34db1] cursor-not-allowed"
                                    : "bg-[#0b1320] hover:bg-[#162235] text-white"
                            }`}
                        >
                            {isAdded ? (
                                <>
                                    <GiCheckMark /> Added to Stack
                                </>
                            ) : (
                                "Add to Stack"
                            )}
                        </button>
                        
                </div>
                );
            })}
        </div>

    )
}

export default ShowCart;