
const RadioButton = ({labelName,size, value}) => {

    // size mean actual value and value means it other values of that label 
    return (
        <>
            <input type="radio" name={labelName}  checked={size === value} onChange={() => {}} className="hidden peer"/>
            <div className=" flex items-center">
                <div className={`flex items-center justify-center w-4 h-4 border rounded-full  ${(size === value) ? 'bg-[#ee4444] border-none' : 'bg-white'} `}>
                    <div className="w-[6px] h-[5px] rounded-full bg-white"> </div>
                </div>
            </div>
        </>
    )
}
export default RadioButton;