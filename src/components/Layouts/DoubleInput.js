import { useEffect } from "react";

export const DoubleInput = ({ children }) => {
    useEffect(() => {
        if (children.length !== 2) {
            throw new Error("Must provide 2 childrens at DoubleInput Component");
        }
    }, [])
    return (
        <div className="w-full flex gap-4 flex-col sm:flex-row">
            <div className="w-full sm:basis-1/2">
                {children[0]}
            </div>
            <div className="w-full sm:basis-1/2">
                {children[1]}
            </div>
        </div>
    )
}
