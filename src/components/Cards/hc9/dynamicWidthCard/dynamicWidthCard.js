import React from "react";

import "./dynamicWidthCard.css";

const DynamicWidthCard = ({ data }) => {
    return (
        <a
            href={data.url}
            style={{
                backgroundColor: `${data.bg_color}`,
                backgroundImage: `url("${data.bg_image?.image_url}")`,
                aspectRatio: `${data.bg_image?.aspect_ratio}`,
            }}
            className="hc9-card"
        ></a>
    );
};

export default DynamicWidthCard;
