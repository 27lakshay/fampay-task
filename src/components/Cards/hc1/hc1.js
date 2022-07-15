import React from "react";

import SmallDisplayCard from "./smallDisplayCard/smallDisplayCard";
import "./hc1.css";

const HC1 = ({ cardData }) => {
    const isScrollable = cardData.cards.length > 1 && cardData.is_scrollable;
    return (
        <div style={{ overflowX: `${isScrollable ? "auto" : "hidden"}` }} className="hc1-card-wrapper hc-row">
            {cardData.cards?.map((item) => (
                <SmallDisplayCard data={item} />
            ))}
        </div>
    );
};

export default HC1;
