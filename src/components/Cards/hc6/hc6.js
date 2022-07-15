import React from "react";

import SmallCardWithArrow from "./smallCardWithArrow/smallCardWithArrow";
import "./hc6.css";

const HC6 = ({ cardData }) => {
    const isScrollable = cardData.cards.length > 1 && cardData.is_scrollable;
    return (
        <div style={{ overflowX: `${isScrollable ? "auto" : "hidden"}` }} className="hc6-card-wrapper hc-row">
            {cardData.cards?.map((item) => (
                <SmallCardWithArrow data={item} />
            ))}
        </div>
    );
};

export default HC6;
