import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

import ddIcon from "../assets/icons/dd.svg";

const data = {
    rows: [
        {
            title: "How do I pay for my ride?",
            content: `We accept all major credit cards with 4% processing fee. We accept cash, Venmo, or Zelle, payment must be made within 24 hours upon arrival.`,
        },
        {
            title: "What if my flight is delayed?",
            content:
                "We will always ask for your flight information when arranging an airport pickup. Our team will monitor the schedule and be there when your plane lands, whether early, late, or on time.",
        },
        {
            title: "Can I make changes to my reservation after it has been confirmed?",
            content: `Yes, you can make changes to your reservation at no extra cost by emailing us at larollerscarservice@gmail.com or by calling us on <p class="helvetia">+310 270-3561<p>`,
        }
    ],
};

const config = {
    animate: true,
    arrowIcon: "▼",
    // tabFocus: true
};

const styles = {
    
};

export const FaqComponent = () => {
    return (
        <div id="faq" className="faq pb-20 lg:pb-36">
            <h2 className="text-4xl">FAQ</h2>
            <div className="mt-8">
                <Faq
                    data={data}
                    // styles={styles}
                    config={config}
                />
            </div>
        </div>
    )
}