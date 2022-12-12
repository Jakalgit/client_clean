import React, {useEffect, useState} from 'react';
import style_css from "../css/FindYourOrder.module.css"
import {fetchOneOrderByNumber, fetchOrdersByPhone} from "../http/API/orderAPI";
import height from "../css/General.module.css"
import Footer from "../components/Footer";
import Alert from "../components/Alert";
import {useNavigate} from "react-router-dom";
import Fade from "react-reveal/Fade";
import {YOURORDER_ROUTE} from "../utils/consts";
import {Zoom} from "react-reveal";

const FindYourOrder = () => {

    document.title = 'Поиск заказа'

    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState('')

    const [orders, setOrders] = useState([])

    const [start, setStart] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                setStart(false)
            }, 2500)
        }
    }, [start])

    const findOrder = () => {
        if (searchValue) {
            if (searchValue.includes("+7")) {
                fetchOrdersByPhone(searchValue).then(data => {
                    if (data === "Заказы не найдены") {
                        setMessage(data)
                        setStart(true)
                    } else {
                        setOrders(data.reverse())
                    }
                })
            } else {
                setOrders([])
                fetchOneOrderByNumber(searchValue).then(data => {
                    if (data === "Заказ не найден") {
                        setMessage(data)
                        setStart(true)
                    } else {
                        setOrders([data])
                    }
                })
            }
        } else {
            setMessage("Ошибка")
            setStart(true)
        }
    }

    const updateStart = (value) => {
        setStart(value)
    }

    return (
        <div>
            <Alert start={start} variant={'danger'} text={message} updateStart={(value) => updateStart(value)}/>
            <div className={style_css.find_orders + ' ' + height.height}>
                <div className="container">
                    <div className="row">
                        <Fade top>
                            <h2 className={style_css.find_order_text}>Поиск заказов</h2>
                        </Fade>
                        <Fade>
                            <input type="text"
                                   value={searchValue}
                                   onChange={(e) => setSearchValue(e.target.value)}
                                   className={style_css.input + ' col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-10 offset-1'}
                                   placeholder="Номер заказа или номер телфона +7..."/>
                        </Fade>
                        <Fade bottom>
                            <button onClick={findOrder}
                                    className={style_css.save + ' col-xxl-3 offset-xxl-2 col-xl-3 offset-xl-2 col-lg-3 offset-lg-2 col-md-3 offset-md-2 col-sm-4 offset-sm-1 col-10 offset-1'}>
                                Поиск
                            </button>
                        </Fade>
                        {orders.length !== 0 ?
                            <div className={style_css.orders + ' col-xxl-12 offset-xxl-0 col-xl-12 offset-xl-0 col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-10 offset-1'}>
                                {orders.map(order =>
                                    <Fade>
                                        <div onClick={() => navigate(YOURORDER_ROUTE + '/' + order.number)} className={style_css.order}>
                                            <Zoom cascade>
                                                <h2 className={style_css.order_number}>{'№ ' + order.number}</h2>
                                            </Zoom>
                                        </div>
                                    </Fade>
                                )}
                            </div>
                            :
                            <Fade>
                                <h2 className={style_css.empty_text}>Пусто...</h2>
                            </Fade>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FindYourOrder;