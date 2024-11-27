import { useState } from "react";

export const Counter = ({name}) => {
    const [value, setValue] = useState(0);

    return (
        <div className=" w-20 lg:w-16 relative ml-auto md:ml-0">
            <span onClick={() => setValue(value + 1)} className="w-6 h-1/2 flex bg-purple-200 rounded-tr-lg items-center justify-center cursor-pointer absolute right-0 top-0">+</span>
            <span onClick={() => value > 0 && setValue(value - 1)} className="w-6 h-1/2 flex bg-purple-100 rounded-br-lg items-center justify-center cursor-pointer absolute right-0 bottom-0">-</span>
            <input style={{ outline: "1px solid #1D1DE3" }} name={name} type="number" id="number-input" className="pl-4 counter-input" readOnly value={value} />
        </div>
    )
}