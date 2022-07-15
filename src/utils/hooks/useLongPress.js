import { useState, useRef } from "react";

export default function useLongPress() {
    const [action, setAction] = useState();

    const timerRef = useRef();
    const isLongPress = useRef();

    function startPressTimer() {
        isLongPress.current = false;
        timerRef.current = setTimeout(() => {
            isLongPress.current = true;
            setAction("longpress");
        }, 400);
    }

    function handleOnClick(e) {
        clearTimeout(timerRef.current);
        if (isLongPress.current) {
            return;
        }
        setAction("click");
    }

    function handleOnTouchStart() {
        startPressTimer();
    }

    function handleOnTouchEnd() {
        if (action === "longpress") return;
        clearTimeout(timerRef.current);
    }

    return {
        action,
        handlers: {
            onClick: handleOnClick,
            onTouchStart: handleOnTouchStart,
            onTouchEnd: handleOnTouchEnd,
        },
    };
}
