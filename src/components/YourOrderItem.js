import React from 'react';
import style_css from "../css/components/YourOrderItem.module.css"
import {Fade} from "react-reveal";
import LoadImage from "./LoadImage";

const YourOrderItem = (props) => {

    let fullPrice = String(Number(props.price) * Number(props.count))
    let price = props.price
    if (fullPrice.length > 3) {
        fullPrice = fullPrice.slice(0, fullPrice.length - 3) + ' ' + fullPrice.slice(fullPrice.length - 3, fullPrice.length)

        if (fullPrice.length > 7) {
            fullPrice = fullPrice.slice(0, fullPrice.length - 7) + ' ' + fullPrice.slice(fullPrice.length - 7, fullPrice.length)
        }
    }
    if (price.length > 3) {
        price = price.slice(0, price.length - 3) + ' ' + price.slice(price.length - 3, price.length)
    }

    return (
        <div className={style_css.item + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
            <Fade bottom>
                <h1 className={style_css.item_name + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{props.name}</h1>
                <div className={style_css.img + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                    <LoadImage name={props.image} className={style_css.image} />
                </div>
                <h2 className={style_css.first_price + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{price + ' ₽'}</h2>
                <div className={style_css.counter}>
                    <h2 className={style_css.count}>{props.count + 'шт.'}</h2>
                </div>
                <h2 className={style_css.full_price + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{fullPrice + ' ₽'}</h2>
            </Fade>
        </div>
    );
};

export default YourOrderItem;