import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneOrderByNumber} from "../http/API/orderAPI";
import {fetchOrderItems} from "../http/API/orderItemAPI"
import style_css from "../css/YourOrder.module.css"
import general from "../css/General.module.css"
import YourOrderItem from "../components/YourOrderItem";
import Footer from "../components/Footer";
import {Spinner} from "react-bootstrap";
import {Bounce, Fade, Slide, Flip} from "react-reveal";

const YourOrder = () => {

    document.title = 'Ваш заказ'

    const {number} = useParams()

    const [order, setOrder] = useState(null)
    const [orderItems, setOrderItems] = useState([])

    const [fullPrice, setFullPrice] = useState('0')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchOneOrderByNumber(number).then(data => {
            setOrder(data)
            fetchOrderItems(data.id).then(data => {
                setOrderItems(data.rows)
            })
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        let full = '0'
        orderItems.forEach(item => {
            full = String(Number(full) + Number(item.price) * Number(item.count))
        })
        if (full.length > 3) {
            full = full.slice(0, full.length - 3) + ' ' + full.slice(full.length - 3, full.length)

            if (full.length > 7) {
                full = full.slice(0, full.length - 7) + ' ' + full.slice(full.length - 7, full.length)
            }
        }
        setFullPrice(full)
    }, [orderItems])

    if (loading) {
        return (
            <div className={general.loading}>
                <Spinner animation="border" variant="secondary" />
            </div>
        )
    }

    return (
        <div>
            {order !== null ?
                <div>
                    <div className={style_css.check_order}>
                        <div className="container">
                            <div className="row">
                                <h2 className={style_css.check_order_text + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                                    <Bounce cascade>
                                        {'Заказ № ' + order.number}
                                    </Bounce>
                                </h2>
                                <div className={style_css.left_block + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
                                    <Fade top>
                                        <h2 className={style_css.header_info}>ФИО:</h2>
                                        <h2 className={style_css.info}>{(order.lastName === 'не указано' ? '' : order.lastName) + ' ' +
                                            order.firstName + ' ' + (order.secondName === 'не указано' ? '' : order.secondName)}</h2>
                                    </Fade>
                                    <Fade top>
                                        <h2 className={style_css.header_info}>Контактные данные:</h2>
                                        {order.phoneNumber ?
                                            <h2 className={style_css.info}>{order.phoneNumber}</h2>
                                            :
                                            <h2 className={style_css.info}>Номер телефона: не указано</h2>
                                        }
                                        {order.email ?
                                            <h2 className={style_css.info}>{'Адрес почты: ' + order.email}</h2>
                                            :
                                            <h2 className={style_css.info}>Адрес почты: не указано</h2>
                                        }
                                    </Fade>
                                    <Fade top>
                                        {order.typeDelivery === '1' ?
                                            <div/>
                                            :
                                            <div>
                                                {order.typeDelivery === '2' ?
                                                    <div>
                                                        <h2 className={style_css.header_info}>Адрес:</h2>
                                                        <h2 className={style_css.info}>{order.street + ' ' + order.house + ', ' + order.flat}</h2>
                                                        <h2 className={style_css.info}>{'Индекс: ' + order.index}</h2>
                                                    </div>
                                                    :
                                                    <div>
                                                        <h2 className={style_css.header_info}>Адрес:</h2>
                                                        <h2 className={style_css.info}>{'Индекс: ' + order.index}</h2>
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </Fade>
                                </div>
                                <div className={style_css.right_block + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
                                    <Fade top>
                                        <h2 className={style_css.header_info}>Способ оплаты:</h2>
                                        {order.typePay === '1' ?
                                            <h2 className={style_css.info}>Оплата онлайн</h2>
                                            :
                                            <h2 className={style_css.info}>Оплата наличными</h2>
                                        }
                                    </Fade>
                                    <Fade top>
                                        <h2 className={style_css.header_info}>Способ доставки:</h2>
                                        {order.typeDelivery === '1' ?
                                            <h2 className={style_css.info}>Самовывоз</h2>
                                            :
                                            order.typeDelivery === '2' ?
                                                <h2 className={style_css.info}>Доставка по Москве</h2>
                                                :
                                                <h2 className={style_css.info}>{order.house}</h2>
                                        }
                                    </Fade>
                                    <Fade top>
                                        {order.track === 'не указано' ?
                                            <h2 className={style_css.info}>------------------------</h2>
                                            :
                                            <h2 className={style_css.info}>{'Трек-номер: ' + order.track}</h2>
                                        }
                                    </Fade>
                                    <Fade top>
                                        <h2 className={style_css.header_info}>Статус заказа:</h2>
                                        <h2 className={style_css.info}>{order.typeSubmit}</h2>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Slide right>
                        {order.track === 'не указано' && order.typeDelivery === '3' ?
                            <div className="order-info">
                                <div className="conatiner">
                                    <div className="row">
                                        <h2 className={style_css.info + ' ' + style_css.margin + ' col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1'}>Как
                                            только ваш заказ будет передан в службу СДЭК в пункте <strong>"Способ
                                                доставки"</strong> появится трек-номер посылки.</h2>
                                    </div>
                                </div>
                            </div>
                            :
                            <div/>
                        }
                    </Slide>

                    <div className="item-block">
                        <div className="container">
                            <div className="row">
                                <h2 className={style_css.order_sum}>
                                    <Flip right cascade>
                                        <p className={style_css.text}>Сумма заказа:</p>{' ' + fullPrice + ' ₽'}
                                    </Flip>
                                </h2>
                                {orderItems.length !== 0 ?
                                    <div className="items">
                                        {orderItems.map(item =>
                                            <YourOrderItem image={item.img} name={item.name} price={item.price} count={item.count} />
                                        )}
                                    </div>
                                    :
                                    <div/>
                                }
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                :
                <div/>
            }
        </div>
    );
};

export default YourOrder;