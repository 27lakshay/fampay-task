import React from "react";

import DynamicWidthCard from "./dynamicWidthCard/dynamicWidthCard";
import "./hc9.css";

const HC9 = ({ cardData }) => {
    const isScrollable = cardData.cards.length > 1;
    const devicePixelRatio = window.devicePixelRatio || 1;
    const height = cardData.height * devicePixelRatio;

    return (
        <div
            style={{ overflowX: `${isScrollable ? "auto" : "hidden"}`, height: `${height}px` }}
            className="hc9-card-wrapper hc-row"
        >
            {cardData.cards?.map((item) => (
                <DynamicWidthCard data={item} />
            ))}
        </div>
    );
};

export default HC9;
