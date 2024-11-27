import { useState } from "react";

export const TimeInput = ({icon, placeholder, name}) => {
    const [value, setValue] = useState("00:00");
    return (
        <div className="stringinput relative helvetia">
            <div className="w-8 absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={icon} alt="clock" />
            </div>
            <input onChange={(e) => setValue(e.target.value)} type="time" name={name} className="input" placeholder={placeholder} value={value}  />
            
        </div>
    )
}