import { Datepicker } from "flowbite-react";

export const CalendarInput = ({ icon, placeholder }) => {
  
    return <div className="relative">
        <Datepicker className="helvetia datepicker" />
        <img className="absolute top-3 left-3" style={{width: "19px"}} src={icon} alt="icon" />
    </div>
}