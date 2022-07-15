import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import PullToRefresh from "pulltorefreshjs";

import { getCards } from "../../utils/api";

import HC1 from "./hc1/hc1";
import HC3 from "./hc3/hc3";
import HC5 from "./hc5/hc5";
import HC6 from "./hc6/hc6";
import HC9 from "./hc9/hc9";

import "./cards.css";

const Cards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        getCards()
            .then((response) => response.json())
            .then((response) => setCards(response.card_groups))
            .catch((error) => {
                setError(true);
                console.error(error);
            })
            .finally(setLoading(false));
            
        PullToRefresh.init({
            mainElement: "body",
            onRefresh() {
                window.location.reload();
            },
            iconArrow: ReactDOMServer.renderToString("Reload?"),
            iconRefreshing: ReactDOMServer.renderToString("Reloading!"),
        });
        return () => {
            PullToRefresh.destroyAll();
        };
    }, []);

    const renderCardUI = (item) => {
        switch (item.design_type) {
            case "HC1":
                return <HC1 cardData={item} />;

            case "HC3":
                return <HC3 cardData={item} />;

            case "HC5":
                return <HC5 cardData={item} />;

            case "HC6":
                return <HC6 cardData={item} />;

            case "HC9":
                return <HC9 cardData={item} />;

            default:
                return;
        }
    };

    return (
        <main className="page-cards">
            {cards && cards.map((item) => renderCardUI(item))}
            <div className="page-message">
                {loading && "Loading..."}
                {error && "Oops something went wrong..."}
            </div>
        </main>
    );
};

export default Cards;
