import React, {useContext, useEffect, useState} from 'react';
import BasketCss from '../css/components/Basket.module.css'
import {useNavigate} from 'react-router-dom'
import {
    decrementBasketItem,
    deleteOneBasketItem,
    getAllBasketItems,
    incrementBasketItem
} from "../http/API/basketItemAPI";
import {ITEM_ROUTE} from "../utils/consts";
import {Context} from "../index";
import Fade from "react-reveal/Fade";
import LoadImage from "./LoadImage";
import CHEVRON_LEFT from "../img/chevron-left.webp"
import CHEVRON_RIGHT from "../img/chevron-right.webp"
import X_WHITE from "../img/x_white.webp"

const BasketItem = (props) => {

    const {user} = useContext(Context)
    const {item} = useContext(Context)

    const [countValue, setCountValue] = useState(props.count)
    const [price, setPrice] = useState('')
    const [fullPrice, setFullPrice] = useState('')

    const navigate = useNavigate()

    const setFull = () =>{
        let sm = ''

        if (price.length > 3) {
            sm = price.slice(0, price.length-4) + price.slice(price.length-3, price.length)
        } else {
            sm = price
        }

        let fullPriceData = (Number(sm) * countValue).toString()

        if (fullPriceData.length > 3) {
            fullPriceData = fullPriceData.slice(0, fullPriceData.length - 3) + ' ' + fullPriceData.slice(fullPriceData.length - 3, fullPriceData.length)

            if (fullPriceData.length > 7) {
                fullPriceData = fullPriceData.slice(0, fullPriceData.length - 7) + ' ' + fullPriceData.slice(fullPriceData.length - 7, fullPriceData.length)
            }
        }

        setFullPrice(fullPriceData)
    }

    useEffect(() => {
        let priceData = props.price.toString()
        if (priceData.length > 3) {
            setPrice((priceData.slice(0, priceData.length - 3) + ' ' + priceData.slice(priceData.length - 3, priceData.length)).toString())
        }
    }, [item.basketItems])

    useEffect(() => {
        setFull()
    }, [price, countValue])

    const itemClick = () => {
        navigate(ITEM_ROUTE + '/' + props.itemId)
    }

    const increment = () => {
        if (countValue < 99) {
            incrementBasketItem(props.itemId, props.itemColorId, props.basketId).then(() => {
                setCountValue(countValue + 1)
                let prMas = item.basketItems.map(item => {
                    if (item.id === props.id) {
                        item.count++
                    }
                    return item
                })
                item.setBasketItems(prMas)
                props.setItems(prMas)
            })
            setFull()
        }
    }

    const decrement = () => {
        if (countValue > 1) {
            decrementBasketItem(props.itemId, props.itemColorId, props.basketId).then(() => {
                setCountValue(countValue - 1)
                let prMas = item.basketItems.map(item => {
                    if (item.id === props.id) {
                        item.count--
                    }
                    return item
                })
                item.setBasketItems(prMas)
                props.setItems(prMas)
            })
            setFull()
        }
    }

    const deleteBasketItem = () => {
        deleteOneBasketItem(props.id).then(() => {
            getAllBasketItems(user.basket.id).then(data => {
                data.sort((prev, next) => prev.id - next.id)
                item.setBasketItems(data)
                props.setItems([])
                props.setItems(data)
            })
        })
    }

    return (
        <Fade bottom>
            <div className={BasketCss.item + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
                <h1 className={BasketCss.item_name + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{props.name}</h1>
                <div className={BasketCss.img + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                    <LoadImage name={props.image} className={BasketCss.image} onClick={itemClick} />
                </div>
                <h2 className={BasketCss.first_price + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{price + ' ₽'}</h2>
                <div className={BasketCss.counter + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                    <div className={BasketCss.change} onClick={decrement}>
                        <img src={CHEVRON_LEFT} alt="" className={BasketCss.chevron}/>
                    </div>
                    <h2 className={BasketCss.count}>{countValue}</h2>
                    <div className={BasketCss.change} onClick={increment}>
                        <img src={CHEVRON_RIGHT} alt="" className={BasketCss.chevron}/>
                    </div>
                </div>
                <div className={BasketCss.help_delete + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                    <div className={BasketCss.delete_item} onClick={deleteBasketItem}>
                        <img src={X_WHITE} alt="" className={BasketCss.delete}/>
                    </div>
                </div>
                <h2 className={BasketCss.full_price + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{fullPrice + ' ₽'}</h2>
            </div>
        </Fade>
    );
};

export default BasketItem;