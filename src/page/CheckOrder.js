import React, {useContext, useEffect, useState} from 'react';
import CheckOrderCss from '../css/CheckOrder.module.css'
import {Context} from "../index";
import ModalWindow from "../components/ModalWindow";
import {createOrder} from "../http/API/orderAPI";
import {createOrderItem} from "../http/API/orderItemAPI"
import ReCAPTCHA from "react-google-recaptcha";
import {useNavigate} from "react-router-dom";
import {THANKS_ROUTE} from "../utils/consts";
import Footer from "../components/Footer";
import general from "../css/General.module.css";
import {Spinner} from "react-bootstrap";
import {Fade} from "react-reveal";

const CheckOrder = () => {

    document.title = 'Проверка данных'

    const {user} = useContext(Context)
    const {item} = useContext(Context)
    const {order} = useContext(Context)

    const navigate = useNavigate()

    const [showModal, setShowModal] = useState(false)
    const [modalText, setModalText] = useState('')
    const [captcha, setCaptcha] = useState(false)

    const [flagLoading, setFlagLoading] = useState(false)

    const cleanOrder = () => {
        order.setToken('')
        order.setFirstName('')
        order.setLastName('')
        order.setSecondName('')
        order.setPhoneNumber('')
        order.setEmail('')
        order.setIndex('')
        order.setStreet('')
        order.setHouse('')
        order.setFlat('')
        order.setPrice('')
        order.setTypePay('')
        order.setTypeDelivery('')
    }

    const createOrderUser = () => {
        if (captcha) {
            setModalText('Ошибка')
            if (order.typeDelivery) {
                if (order.typeDelivery === '1') {
                    if (order.firstName && order.phoneNumber && order.typePay && order.price) {
                        createOrder(user.user.token, order.number, order.firstName, order.lastName, order.secondName, order.phoneNumber,
                            order.email, '', '', '', '', order.price, order.typePay, order.typeDelivery, 'Ожидает подтверждения').then(data => {
                            cleanOrder()
                            navigate(THANKS_ROUTE)
                            item.basketItems.forEach(basketItem => {
                                createOrderItem(basketItem.itemId, basketItem.name, basketItem.price, basketItem.img, basketItem.count, data.id).then(() => {})
                            })
                        })
                    } else {
                        setShowModal(true)
                    }
                }

                if (order.typeDelivery === '2') {
                    if (order.firstName && order.phoneNumber && order.street && order.house && order.flat && order.price && order.typePay && order.typeDelivery) {
                        createOrder(user.user.token, order.number, order.firstName, order.lastName, order.secondName, order.phoneNumber, order.email,
                            order.index, order.street, order.house, order.flat, order.price, order.typePay, order.typeDelivery, 'Ожидает подтверждения').then(data => {
                            cleanOrder()
                            navigate(THANKS_ROUTE)
                            item.basketItems.forEach(basketItem => {
                                createOrderItem(basketItem.itemId, basketItem.name, basketItem.price, basketItem.img, basketItem.count, data.id).then(() => {})
                            })
                        })
                    } else {
                        setShowModal(true)
                    }
                }

                if (order.typeDelivery === '3') {
                    if (order.firstName && order.lastName && order.secondName && order.phoneNumber && order.index &&
                        order.street && order.house && order.flat && order.price && order.typePay && order.typeDelivery) {
                        createOrder(user.user.token, order.number, order.firstName, order.lastName, order.secondName, order.phoneNumber, order.email,
                            order.index, order.street, order.house, order.flat, order.price, order.typePay, order.typeDelivery, 'Ожидает подтверждения').then(data => {
                            cleanOrder()
                            navigate(THANKS_ROUTE)
                            item.basketItems.forEach(basketItem => {
                                createOrderItem(basketItem.itemId, basketItem.name, basketItem.price, basketItem.img, basketItem.count, data.id).then(() => {})
                            })
                        })
                    } else {
                        setShowModal(true)
                    }
                }

                setCaptcha(false)

            } else {
                setShowModal(true)
            }
        } else {
            setModalText('Нажмите "Я не робот"')
            setShowModal(true)
        }
    }

    function isEmpty(obj) {
        for (let key in obj) {
            // если тело цикла начнет выполняться - значит в объекте есть свойства
            return false;
        }
        return true;
    }

    useEffect(() => {
        if (!isEmpty(order.typeDelivery)) {
            if (order.typeDelivery === '1') {
                if (!isEmpty(order.firstName) && !isEmpty(order.phoneNumber) && !isEmpty(order.typePay)) {
                    setFlagLoading(true)
                } else {
                    setFlagLoading(false)
                }
            }

            if (order.typeDelivery === '2') {
                if (!isEmpty(order.firstName) && !isEmpty(order.phoneNumber) && !isEmpty(order.street)
                    && !isEmpty(order.house) && !isEmpty(order.flat) && !isEmpty(order.typePay)) {
                    setFlagLoading(true)
                } else {
                    setFlagLoading(false)
                }
            }

            if (order.typeDelivery === '3') {
                if (!isEmpty(order.firstName) && !isEmpty(order.lastName) && !isEmpty(order.secondName) && !isEmpty(order.phoneNumber) && !isEmpty(order.index)
                    && !isEmpty(order.street) && !isEmpty(order.house) && !isEmpty(order.typePay)) {
                    setFlagLoading(true)
                } else {
                    setFlagLoading(false)
                }
            }
        } else {
            setFlagLoading(false)
        }
    }, [])


    if (!flagLoading) {
        return (
            <div className={general.loading}>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    return (
        <div>
            <div className={CheckOrderCss.check_order}>
                <div className="container">
                    <div className="row">
                        <h2 className={CheckOrderCss.check_order_text + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>Проверьте
                            введённые данные</h2>
                        <Fade>
                            <div className={CheckOrderCss.left_block + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
                                <h2 className={CheckOrderCss.header_info}>ФИО:</h2>
                                <h2 className={CheckOrderCss.info}>{order.lastName + ' ' + order.firstName + ' ' + order.secondName}</h2>
                                <h2 className={CheckOrderCss.header_info}>Контактные данные:</h2>
                                <h2 className={CheckOrderCss.info}>{order.phoneNumber}</h2>
                                {order.email ?
                                    <h2 className={CheckOrderCss.info}>{order.email}</h2>
                                    :
                                    <h2 className={CheckOrderCss.info}>Адрес почты: не указано</h2>
                                }
                                {order.typeDelivery !== '1' ?
                                    <div>
                                        <h2 className={CheckOrderCss.header_info}>Адрес:</h2>
                                        {order.house === 'Доставка СДЭК до пункта' ?
                                            <div/>
                                            :
                                            <div>
                                                {order.house === 'Доставка СДЭК до двери' ?
                                                    <h2 className={CheckOrderCss.info}>{order.street}</h2>
                                                    :
                                                    <h2 className={CheckOrderCss.info}>{order.street + ', ' + order.house + ', ' + order.flat}</h2>
                                                }
                                            </div>
                                        }
                                        {order.index !== '' && order.index !== 'Доставка СДЭК до двери' ?
                                            <h2 className={CheckOrderCss.info}>{'Индекс: ' + order.index}</h2>
                                            :
                                            <div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    <div>

                                    </div>
                                }
                            </div>
                        </Fade>
                        <Fade>
                            <div className={CheckOrderCss.right_block + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
                                <h2 className={CheckOrderCss.header_info}>Способ оплаты:</h2>
                                {order.typePay === '1' ?
                                    <h2 className={CheckOrderCss.info}>Оплата онлайн</h2>
                                    : order.typePay === '2' ?
                                        <h2 className={CheckOrderCss.info}>Оплата при получении</h2>
                                        :
                                        <div/>
                                }
                                <h2 className={CheckOrderCss.header_info}>Способ доставки:</h2>
                                {order.typeDelivery === '1' ?
                                    <h2 className={CheckOrderCss.info}>Самовывоз</h2>
                                    : order.typeDelivery === '2' ?
                                        <h2 className={CheckOrderCss.info}>Доставка по Москве</h2>
                                        :
                                        <h2 className={CheckOrderCss.info}>{order.house}</h2>
                                }
                                <h2 className={CheckOrderCss.info}>{order.price + ' ₽'}</h2>
                                <button onClick={createOrderUser}
                                        className={CheckOrderCss.right + ' col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1'}>Всё
                                    верно
                                </button>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className={CheckOrderCss.captcha_block}>
                                <ReCAPTCHA sitekey={'6Lc3XqwfAAAAANThcBTPkUFT38GRBA6IvTK7oUpi'} onChange={() => setCaptcha(true)} onExpired={() => setCaptcha(false)} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer />
            <ModalWindow show={showModal} text={modalText} onHide={() => setShowModal(false)} />
        </div>
    );
};

export default CheckOrder;