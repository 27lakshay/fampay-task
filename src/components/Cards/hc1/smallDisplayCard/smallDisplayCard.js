import React from "react";

import FormattedString from "../../../../utils/formattedString";
import "./smallDisplayCard.css";

const SmallDisplayCard = ({ data }) => {
    return (
        <a href={data.url} style={{ backgroundColor: `${data.bg_color}` }} className="hc1-card">
            <div className="hc1-card-left">
                {data.icon && <img className="hc1-card-img" src={data.icon.image_url} />}
            </div>
            <div className="hc1-card-right">
                <div className="hc1-card-title">
                    {data.formatted_title?.text ? <FormattedString data={data.formatted_title} /> : data.title}
                </div>
                <div className="hc1-card-desc">
                    {data.formatted_description?.text ? (
                        <FormattedString data={data.formatted_description} />
                    ) : (
                        data.description
                    )}
                </div>
            </div>
        </a>
    );
};

export default SmallDisplayCard;
