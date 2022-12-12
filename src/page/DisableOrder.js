import React from 'react';
import style_css from "../css/DisableOrder.module.css"
import {Fade, Zoom} from "react-reveal"

const DisableOrder = () => {

    document.title = 'Онлайн оплата'

    return (
        <div className={style_css.block}>
            <div style={{textAlign: "center"}}>
                <Fade bottom cascade>
                    <h1 className={style_css.pay_order}>Оплата заказа</h1>
                </Fade>
                <Fade cascade>
                    <h2 className={style_css.discript}>
                        К сожалению онлайн оплата на сайте временно не работает,<br/>
                        вы можете договориться о доставке или сами забрать заказ позвонив<br/>
                        по нашему номеру.
                    </h2>
                </Fade>
                <Fade cascade>
                    <h2 className={style_css.sorry_text}>Приносим свои извинения.</h2>
                </Fade>
                <Zoom cascade>
                    <a href="tel:+79859342454" className={style_css.tel}>+7(985)-934-24-54</a>
                </Zoom>
            </div>
        </div>
    );
};

export default DisableOrder;