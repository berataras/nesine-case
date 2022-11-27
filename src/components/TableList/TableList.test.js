import React from "react";
import {render, fireEvent} from "@testing-library/react";

import TableList from "./TableList";

test("check the first data count", () => {
    const {container, debug} = render(<TableList />);
    const listLength = container.getElementsByClassName('list')[0].childElementCount;
    expect(listLength).toBe(10);
});

test("check data increase after click more data button", () => {
    const {container} = render(<TableList />);
    const moreDataButton = container.getElementsByClassName("loadMoreButton")[0]
    fireEvent.click(moreDataButton);

    const listLength = container.getElementsByClassName('list')[0].childElementCount;

    expect(listLength).toBe(20)
})