import { useState } from "react"

export const StringInput = ({icon, placeholder, name}) => {
    const [value, setValue] = useState("");
    return (
        <div className="stringinput relative helvetia">
            <div className="w-8 absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <img src={icon} alt="clock" />
            </div>
            <input onChange={(e) => setValue(e.target.value)} type="text" name={name} id="stringinput" className="input" placeholder={placeholder} value={value} />
            
        </div>
    )
}