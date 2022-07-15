import React from "react";

import ImageCard from "./imageCard/imageCard";
import "./hc5.css";

const HC5 = ({ cardData }) => {
    const isScrollable = cardData.cards.length > 1 && cardData.is_scrollable;
    return (
        <div style={{ overflowX: `${isScrollable ? "auto" : "hidden"}` }} className="hc5-card-wrapper hc-row">
            {cardData.cards?.map((item) => (
                <ImageCard data={item} />
            ))}
        </div>
    );
};

export default HC5;
