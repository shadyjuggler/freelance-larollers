import { useEffect } from "react";

export const OneForTwoInput = ({ children }) => {
    useEffect(() => {
        if (children.length !== 3) {
            throw new Error("Must provide 3 childrens at OneForTwoInput Component");
        }
    }, [])
    return (
        <div className="w-full flex gap-4 flex-col sm:flex-row">
            <div className="basis-1/2">
                {children[0]}
            </div>
            <div className="basis-1/4">
                {children[1]}
            </div>
            <div className="basis-1/4">
                {children[2]}
            </div>
        </div>
    )
}
