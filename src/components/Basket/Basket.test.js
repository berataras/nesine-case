import React from "react";
import "@testing-library/jest-dom"
import {fireEvent, render} from "@testing-library/react"

import Basket from "./Basket";

test("check hide button of basket", () => {
    const {container, getByText, debug} = render(<Basket />);
    const basket = container.getElementsByClassName('basket__content')[0];

    const hideButton = getByText('Gizle');
    fireEvent.click(hideButton);

    expect(basket).not.toBeVisible();
})

test("check show button of basket", () => {
    const {container, getByText, debug} = render(<Basket />);

    const hideButton = getByText('Gizle');
    fireEvent.click(hideButton);
    const showButton = getByText('Kuponlarım');
    fireEvent.click(showButton);

    const basket = container.getElementsByClassName('basket__content')[0];


    expect(basket).toBeVisible();
})