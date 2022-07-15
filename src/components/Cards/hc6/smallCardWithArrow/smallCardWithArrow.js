import React from "react";

import FormattedString from "../../../../utils/formattedString";
import "./smallCardWithArrow.css";

const SmallCardWithArrow = ({ data }) => {
    return (
        <a href={data.url} style={{ backgroundColor: `${data.bg_color}` }} className="hc6-card">
            <div className="hc6-card-left">
                <img className="hc6-card-img" src={data.icon?.image_url} />
            </div>
            <div className="hc6-card-right">
                <div className="hc6-card-title">
                    {data.formatted_title ? <FormattedString data={data.formatted_title} /> : data.title}
                </div>
                <div className="hc6-card-description">
                    {data.formatted_description ? (
                        <FormattedString data={data.formatted_description} />
                    ) : (
                        data.description
                    )}
                </div>
            </div>
        </a>
    );
};

export default SmallCardWithArrow;
