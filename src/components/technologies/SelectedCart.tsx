
import type { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import type { ITechProps } from "../../Type";

export interface SelectedCartProps {
     selectedStack: ITechProps[];
     setSelectedStack: Dispatch<SetStateAction<ITechProps[]>>
}

const SelectedCart = ({ selectedStack, setSelectedStack}: SelectedCartProps) => {
    const handleRemove = (id:number) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full max-w-sm">

       <h3 className="mb-2 text-xl font-bold text-gray-900">Your Stack</h3>

      <p className="text-sm text-gray-500 mb-4">
        {selectedStack.length > 0 ? `${selectedStack.length} technologies selected.`:
         'No technologies selected yet.'}
      </p>

      {selectedStack.length === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-[16px] font-medium text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
            <div className="space-y-2 max-h-100 overflow-y-auto">
            {selectedStack.map((tech:ITechProps) => (
                <div key={tech.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border
                border-gray-200 hover:border-gray-700 transition">
                

                <div className="flex justify-center gap-4">
                        <img src={tech.icon} alt={tech.techName} className="w-[50px] pb-3"/>
                    <div>
                
                    <h2 className="font-semibold text-gray-800 text-[17px]">{tech.techName}</h2>
                    <p>{tech.category}</p>
                    </div>
                </div>

                <button
                    onClick={() => handleRemove(tech.id)}
                    className="text-gray-500 hover:text-red-500 text-[26px] px-2 py-1">
                    <RxCross2 />
                </button>
                </div>
            ))}
            </div>

            <button
                onClick={handleRemoveAll}
                className="w-full mt-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 
                border font-medium text-sm rounded-xl transition">
                Remove all
            </button>
        </>

      )}
    </div>

    )
}

export default SelectedCart;