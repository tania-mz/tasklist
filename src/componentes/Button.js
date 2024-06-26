import React from "react";
import '../style-sheet/Button.css'

export function Button({text, onClick}) {
    return (
        <button className="button-filter" onClick={onClick}>{text}</button>
    );
}