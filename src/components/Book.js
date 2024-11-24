import { useState } from "react"

const formData = [
    {
        tabName: "HOURLY"
    },
    {
        tabName: "ONE WAY"
    },
    {
        tabName: "ROUNDTRIP"
    }
]

export const Book = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const onTabClick = (i) => {
        setCurrentTab(i);
    }

    return (
        <div className="book py-20 lg:py-36">
            <h2 className="text-4xl">Book your ride</h2>

            <div className="mt-8 ride rounded-xl py-12 px-12">
                <div className="tabs flex">
                    {
                        formData.map((offer, i) => {
                            return <button onClick={() => onTabClick(i)} className={`basis-1/3 pb-4 flex justify-center text-xl tab ${currentTab === i && "tab_active"}`}>{offer.tabName}</button>
                        })
                    }                    
                </div>
            </div>
        </div>
    )
}