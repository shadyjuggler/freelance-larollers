import { Dd } from "./Dd";
import { TimeInput } from "./TimeInput";
import { StringInput } from "./StringInput";

import clock from "../../assets/icons/clock.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import time from "../../assets/icons/time.svg";
import stopIcon from "../../assets/icons/stop.svg";

import { OneForTwoInput } from "../Layouts/OneForTwoInput";

export const Stop = ({ stopId }) => {
    return (
        <OneForTwoInput key={stopId} clasName="mb-2">
                <StringInput icon={stopIcon} placeholder={"Stop In"} />
                <Dd icon={clock} placeholder={"For"} />
                <TimeInput icon={time} placeholder={"Time"} />
        </OneForTwoInput>
    )
}