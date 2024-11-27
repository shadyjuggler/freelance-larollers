import { useEffect } from "react";

export const TripeInput = ({ children }) => {
    useEffect(() => {
        if (children.length !== 3) {
            throw new Error("Must provide 3 childrens at TripleInput Component");
        }
    }, [])
    return (
        <div className="w-full flex gap-4 flex-col sm:flex-row">
            <div className="w-full sm:basis-1/3">
                {children[0]}
            </div>
            <div className="w-full sm:basis-1/3">
                {children[1]}
            </div>
            <div className="w-full sm:basis-1/3">
                {children[2]}
            </div>
        </div>
    )
}
