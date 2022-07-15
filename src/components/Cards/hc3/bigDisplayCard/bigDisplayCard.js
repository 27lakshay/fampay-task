import React, { useState } from "react";

import FormattedString from "../../../../utils/formattedString";
import useLongPress from "../../../../utils/hooks/useLongPress";
import "./bigDisplayCard.css";

const BigDisplayCard = ({ data }) => {
    const [visible, setVisible] = useState(true);
    const { action, handlers } = useLongPress();

    const handleRemindLater = () => {
        setVisible(false);
    };
    return (
        <a
            href={data.url}
            className={`hc3-card ${visible ? "" : "hidden"} ${action === "longpress" ? "slide" : ""}`}
            {...handlers}
        >
            <div className="hc3-card-back">
                <div className="hc3-card-control" onClick={handleRemindLater}>
                    remind later
                </div>
                <div className="hc3-card-control">dismiss now</div>
            </div>
            <div
                className={`hc3-card-front ${action === "longpress" ? "slide" : ""}`}
                style={{
                    backgroundColor: `${data.bg_color}`,
                    backgroundImage: `url("${data.bg_image?.image_url}")`,
                }}
            >
                <div className="hc3-card-title">
                    {data.formatted_title ? <FormattedString data={data.formatted_title} /> : data.title}
                </div>
                <div className="hc3-card-description">
                    {data.formatted_description ? (
                        <FormattedString data={data.formatted_description} />
                    ) : (
                        data.description
                    )}
                </div>
                <div className="hc3-card-ctas">
                    {data.cta?.map((item) => (
                        <a
                            href={`${item.url ? item.url : ""}`}
                            className="hc3-card-cta"
                            style={{ backgroundColor: item.bg_color, color: item.text_color }}
                        >
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default BigDisplayCard;
