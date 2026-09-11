export interface SelectedCartProps {
     techFetch: Promise<ITechProps[]>
     selectedStack: Dispatch<SetStateAction<ITechProps[]>>
}

const SelectedCart = ({ techFetch }: SelectedCartProps) => {
    
    return (
        <div >
            <h2 className="text-5xl">koli</h2>
        </div>
    )
}

export default SelectedCart;