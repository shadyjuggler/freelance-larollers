import { Datepicker } from "flowbite-react";
import { useEffect, useRef } from "react";

export const CalendarInput = ({ icon, placeholder }) => {
    const calendarRef = useRef(null);
  
    return <div className="relative">
        <Datepicker name="date" ref={calendarRef} className="helvetia datepicker" />
        <img className="absolute top-3 left-3" style={{width: "19px"}} src={icon} alt="icon" />
    </div>
}