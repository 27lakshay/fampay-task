import React from "react";

import "./imageCard.css";

const ImageCard = ({ data }) => {
    return (
        <a
            href={data.url}
            style={{
                backgroundColor: `${data.bg_color}`,
                backgroundImage: `url("${data.bg_image?.image_url}")`,
                aspectRatio: `${data.bg_image?.aspect_ratio}`,
            }}
            className="hc5-card"
        ></a>
    );
};

export default ImageCard;
