import React, {useContext, useState} from 'react';
import data from "../../data/bulten_data.json";

import "./TableList.style.css";
import ThemeContext from "../../context/ThemeContext";

import {
    TableRateButton,
    LoadMoreButton
} from "../index";

function TableList() {
    const [to, setTo] = useState(10);
    const [value, setValue] = useContext(ThemeContext);

    const clickEvent = (e, match, userChoose) => {
        //checked
        if (e?.target?.checked){
            match.user = {
                O: userChoose?.OC?.O,
                OCN: userChoose?.OC?.N,
                N: userChoose?.N,
            }
            setValue([match, ...value]);
        }

        //unchecked
        if(!e?.target?.checked && e?.target?.checked !== undefined){
            const filterMatch = value?.filter(item => item?.C !== match?.C);
            setValue(filterMatch);
        }
    }

    const moreData = () => {
        setTo(to + 10);
    }

    return (
        <div className="tableList">
            <table className="tableList__list">
                {Object.keys(data?.Events)?.map((key, index) => (
                    <tbody key={index}>
                        <tr>
                            <th colSpan={2}>
                                {data?.Events[key]?.LN}
                            </th>
                            <th>1</th>
                            <th>X</th>
                            <th>2</th>
                        </tr>
                        <tr>
                            <td>
                                {data?.Events[key]?.C} {data?.Events[key]?.T}
                            </td>
                            <td>
                                {data?.Events[key]?.N}
                            </td>

                            {Array.from(["0", "1", "2"]).map((item, i) => (
                                <TableRateButton
                                    data={data}
                                    dataKey={key}
                                    item={item}
                                    index={index}
                                    i={i}
                                    key={i}
                                    onClick={(e) => clickEvent(
                                        e, data?.Events[key],
                                        {
                                            N: data?.Events[key]?.OCG["1"]?.N,
                                            OC: data?.Events[key]?.OCG["1"]?.OC?.[item]
                                        }
                                    )}
                                />
                            ))}
                        </tr>
                    </tbody>
                )).slice(0, to)}
            </table>

            <LoadMoreButton onClick={() => moreData()} />
        </div>
    );
}

export default TableList;