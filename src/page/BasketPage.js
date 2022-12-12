import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import BasketPageCss from '../css/BasketPage.module.css'
import {deleteAllBasketItem, getAllBasketItems} from "../http/API/basketItemAPI";
import BasketItem from "../components/BasketItem";
import Footer from "../components/Footer";
import {Spinner} from "react-bootstrap";
import Fade from "react-reveal/Fade"
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {CREATEORDER_ROUTE} from "../utils/consts";
import general from "../css/General.module.css";
import X_BLACK from "../img/x_black.webp"
import SHOP_CARD from "../img/shopping-cart.webp"

const BasketPage = observer(() => {

    document.title = 'Корзина'

    const {user} = useContext(Context)
    const {item} = useContext(Context)

    const [loading, setLoading] = useState(true)
    const [drawBasketItems, setDrawBasketItems] = useState(item.basketItems)

    const navigate = useNavigate()

    useEffect(() => {
        getAllBasketItems(user.basket.id).then(data => {
            data.sort((prev, next) => prev.id - next.id)
            item.setBasketItems(data)
            setDrawBasketItems(data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    const createOrder = () => {
        navigate(CREATEORDER_ROUTE)
    }

    const setPropsItem = (value) => {
        setDrawBasketItems(value)
    }

    const deleteAllBasketItems = () => {
        deleteAllBasketItem(user.basket.id).then(() => {
            item.setBasketItems([])
            setDrawBasketItems([])
        })
    }

    if (loading) {
        return (
            <div className={general.loading}>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    return (
        <div>
            {item.basketItems.length !== 0 ?
                <div>
                    <div className={general.height}>
                        <Fade>
                            <div className={BasketPageCss.section_line}>
                                <div className="container">
                                    <div className="row">
                                        <h1 className={BasketPageCss.your_basket + ' col-xxl-4 offset-xxl-0 col-xl-4 offset-xl-0 col-lg-4 offset-lg-0 col-md-5 offset-md-0 col-sm-6 offset-sm-0 col-12'}>Ваша
                                            корзина</h1>
                                        <div className={BasketPageCss.help_clean + ' col-xxl-1 offset-xxl-4 col-xl-1 offset-xl-4 col-lg-1 offset-lg-4 col-md-1 offset-md-2 col-sm-2 offset-sm-0 col-2 offset-2'}>
                                            <div className={BasketPageCss.clean_all} onClick={deleteAllBasketItems}>
                                                <img src={X_BLACK} alt="" className={BasketPageCss.close}/>
                                            </div>
                                        </div>
                                        <button className={BasketPageCss.checkout + ' col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 col-5'}
                                                onClick={createOrder}>
                                            Оформить заказ
                                            <img src={SHOP_CARD} alt="" className={BasketPageCss.card}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Fade>

                        <div className="list-item">
                            <div className="container">
                                <div className="row">
                                    {drawBasketItems.map(item =>
                                        <BasketItem
                                            id={item.id}
                                            itemId={item.itemId}
                                            name={item.name}
                                            price={item.price}
                                            count={item.count}
                                            basketId={item.basketId}
                                            itemColorId={item.itemColorId}
                                            image={item.img}
                                            setItems={(value) => setPropsItem(value)}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
                :
                <Fade>
                    <h2 className={BasketPageCss.empty_text}>Добавьте товары</h2>
                </Fade>
            }
        </div>
    );
});

export default BasketPage;