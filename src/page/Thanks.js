import React, {useContext} from 'react';
import BasketPageCss from "../css/BasketPage.module.css";
import {Context} from "../index";
import style_css from "../css/Thanks.module.css"
import {Fade} from "react-reveal";
import {useNavigate} from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";

const Thanks = () => {

    document.title = 'Спасибо за заказ!'

    const {order} = useContext(Context)

    const navigate = useNavigate()

    const number = '№ ' + order.number

    if (number.length === 2) {
        navigate(CATALOG_ROUTE)
    }

    return (
        <div>
            <Fade>
                <h2 onClick={() => navigate(CATALOG_ROUTE)} className={BasketPageCss.empty_text}>
                    Спасибо за покупку!<br/>Ваш заказ обрабатывается<br/><p className={style_css.number}>{number.length === 2 ? '' : number}</p>
                </h2>
            </Fade>
        </div>
    );
};

export default Thanks;