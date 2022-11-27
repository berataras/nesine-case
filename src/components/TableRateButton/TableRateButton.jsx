import React from 'react';
import "./TableRateButton.style.css"

function TableRateButton({onClick, data, item, dataKey, index, i}) {
    return (
        <td
            className="tableRateButton"
            onClick={(e) => onClick(e)}
            key={i}
        >
            <input
                type="checkbox"
                id={`event${index}${i}`}
                name={`event${data?.Events[dataKey]?.C}`}
                value={`event${data?.Events[dataKey]?.C}`}
                className="tableRateButton__event-radio"
            />
            <label
                htmlFor={`event${index}${i}`}
                className="tableRateButton__event-button"
            >
                {data?.Events[dataKey]?.OCG["1"]?.OC?.[item]?.O}
            </label>
        </td>
    );
}

export default TableRateButton;