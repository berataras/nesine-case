import React from "react";
import "@testing-library/jest-dom"
import {fireEvent, render} from "@testing-library/react"

import Basket from "./Basket";

test("check hide and show button of basket", () => {
    const {container, getByText} = render(<Basket />);
    const basket = container.getElementsByClassName('basket__content')[0];
    const showButton = getByText('Kuponlarım');
    const hideButton = getByText('Gizle');
    fireEvent.click(hideButton);
    expect(basket).not.toBeVisible();
    fireEvent.click(showButton);
    expect(basket).toBeVisible();
})