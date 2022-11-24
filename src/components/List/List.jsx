import React, {useContext, useEffect, useState} from 'react';
import data from "../../data/bulten_data.json";

import "./List.style.css";
import ThemeContext from "../../context/ThemeContext";


function List() {
    const [eventKeys] = useState(Object.keys(data.Events));
    const [to, setTo] = useState(10);
    const [value, setValue] = useContext(ThemeContext);

    const clickEvent = (e, match, userChoose) => {
        //checked
        if (e?.target?.checked){
            match.user = {
                O: userChoose.OC.O,
                OCN: userChoose.OC.N,
                N: userChoose.N,
            }
            setValue([match, ...value]);
        }

        //unchecked
        if(!e?.target?.checked && e.target.checked !== undefined){
            const filterMatch = value.filter(item => item?.C !== match?.C);
            setValue(filterMatch);
        }
    }

    const moreData = () => {
        setTo(to + 10);
    }
    return (
        <div>
            <table className="list">
                {eventKeys?.map((key, index) => (
                    <>
                        <tr>
                            <th colSpan={2}>
                                {data.Events[key]?.LN}
                            </th>
                            <th>1</th>
                            <th>X</th>
                            <th>2</th>
                        </tr>
                        <tr>
                            <td>
                                {data.Events[key]?.C} {data.Events[key]?.T}
                            </td>
                            <td>
                                {data.Events[key]?.N}
                            </td>

                            {Array.from(["0", "1", "2"]).map((item, i) => (
                                <td
                                    className="list__event-button-wrapper"
                                    onClick={(e) => clickEvent(
                                        e, data?.Events[key],
                                        {
                                            N: data.Events[key]?.OCG["1"]?.N,
                                            OC: data.Events[key]?.OCG["1"]?.OC?.[item]
                                        }
                                    )}
                                >
                                    <input
                                        type="checkbox"
                                        id={`event${index}${i}`}
                                        name={`event${data.Events[key]?.C}`}
                                        value={`event${data.Events[key]?.C}`}
                                        className="list__event-radio"
                                    />
                                    <label
                                        htmlFor={`event${index}${i}`}
                                        className="list__event-button"
                                    >
                                        {data.Events[key]?.OCG["1"]?.OC?.[item]?.O}
                                    </label>
                                </td>
                            ))}
                        </tr>
                    </>
                )).slice(0, to)}
            </table>
            <div className="moreDataButton" onClick={moreData}>
                Daha Fazla Yükle
            </div>
        </div>
    );
}

export default List;