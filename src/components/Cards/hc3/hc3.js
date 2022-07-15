import React from "react";

import BigDisplayCard from "./bigDisplayCard/bigDisplayCard";
import "./hc3.css";

const HC3 = ({ cardData }) => {
    const isScrollable = cardData.cards.length > 1 && cardData.is_scrollable;
    return (
        <div style={{ overflowX: `${isScrollable ? "auto" : "hidden"}` }} className="hc3-card-wrapper hc-row">
            {cardData.cards?.map((item) => (
                <BigDisplayCard data={item} />
            ))}
        </div>
    );
};

export default HC3;
