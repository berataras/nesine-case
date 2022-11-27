import React, {useContext, useState} from 'react';
import "./Basket.style.css";
import ThemeContext from "../../context/ThemeContext";

function Basket() {
    const [value] = useContext(ThemeContext);
    const [openBasket, setOpenBasket] = useState(true);

    return (
        openBasket ?
            <div className="basket">
                <div className="basket__heading">
                    <div className="basket__heading__content">
                        <div className="basket__heading__title">Kuponum</div>
                        <div
                            className="basket__heading__button"
                            onClick={() => setOpenBasket(false)}
                        >
                            Gizle
                        </div>
                    </div>
                </div>

                <div className="basket__content">
                    {value?.map((item, index) => (
                        <div className="basket__content__card" key={index}>
                            <span className="basket__content__card__match-name">
                                {item?.N}
                            </span>
                            <div className="basket__content__card__match-info">
                                {item?.C} {item?.T}
                            </div>
                            <div className="basket__content__card__match-result">
                                <div className="basket__content__card__match-result__n">
                                    {item?.user?.N}
                                </div>
                                <div className="basket__content__card__match-result__ocn">
                                    {item?.user?.OCN}
                                </div>
                                <div className="basket__content__card__match-result__o">
                                    {item?.user?.O}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="basket__footer">
                    Toplam Tutar: {value?.reduce((acc, item) => acc + parseFloat(item?.user?.O), 0)}
                </div>
            </div> : <div className="showButton" onClick={() => setOpenBasket(true)}>Kuponlarım</div>
    );
}

export default Basket;