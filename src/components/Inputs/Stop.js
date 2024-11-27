import { Dd } from "./Dd";
import { TimeInput } from "./TimeInput";
import { StringInput } from "./StringInput";

import clock from "../../assets/icons/clock.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import time from "../../assets/icons/time.svg";
import stopIcon from "../../assets/icons/stop.svg";

export const Stop = ({stopId}) => {
    return (
        <div key={stopId} className="flex gap-4">
            <div className="basis-1/2">
                <StringInput icon={stopIcon} placeholder={"Stop In"} />
            </div>
            <div className="basis-1/4">
                <Dd icon={clock} placeholder={"For"} />
            </div>
            <div className="basis-1/4">
                <TimeInput icon={time} placeholder={"Time"} />
            </div>
        </div>
    )
}