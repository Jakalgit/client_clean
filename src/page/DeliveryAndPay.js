import React from 'react';
import DeliveryAndPayCss from '../css/DeliveryAndPay.module.css'
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade"

const DeliveryAndPay = () => {

    document.title = 'Доставка и оплата'

    return (
        <div>
            <div className="section-block">
                <Fade opposite cascade collapse>
                    <div className="container">
                        <div className="row">
                            <h2 className={DeliveryAndPayCss.dandp_text + ' ' + DeliveryAndPayCss.up_text}>Доставка и оплата</h2>
                        </div>
                    </div>
                    <div className={DeliveryAndPayCss.color_section}>
                        <div className="container">
                            <div className="row">
                                <div className='left-block col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <h2 className={DeliveryAndPayCss.header_text}>Доставка</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Мы предлагаем следующие способы доставки товара:
                                        доставка<br/> курьером, самовывоз или доставку службой СДЭК.</h2>
                                    <h2 className={DeliveryAndPayCss.header_info}>Курьером:</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Курьер доставит посылку вам до двери в пределах
                                        МКАД.<br/> Стоимость доставки состовляет <p className={DeliveryAndPayCss.index}>300</p> рублей.
                                    </h2>
                                    <h2 className={DeliveryAndPayCss.header_info}>Доставка СДЭК:</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Доставка СДЭК в выбранный пункт выдачи, стоимость
                                        доставки<br/> зависит от веса товара и удалённости региона.</h2>
                                    <h2 className={DeliveryAndPayCss.header_info}>Самовывоз:</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Метро Бауманская<br/>г. Москва, Спартаковская площадь д. 10, стр.
                                        12.<br/><p className={DeliveryAndPayCss.index}>Индекс: 105082.</p></h2>
                                </div>
                                <div className='right-block col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                                    <h2 className={DeliveryAndPayCss.header_text}>Оплата</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Выбрать подходящий для вас спопоб оплаты можно при<br/>оформлении
                                        заказа.</h2>
                                    <h2 className={DeliveryAndPayCss.header_info}>Наличными при получении:</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Доступно только жителям Москвы.</h2>
                                    <h2 className={DeliveryAndPayCss.header_info}>Безналичный расчёт:</h2>
                                    <h2 className={DeliveryAndPayCss.info}>Карты VISA, MasterCard, банковские переводы.</h2>
                                    <h2 className={DeliveryAndPayCss.header_info}>Электронные кошельки:</h2>
                                    <h2 className={DeliveryAndPayCss.info}>WebMoney, Яндекс Деньги и др.</h2>
                                    <h2 className={DeliveryAndPayCss.phone_number}>+7(985)-953-26-96</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <h2 className={DeliveryAndPayCss.dandp_text}>Где нас найти?</h2>
                            <div className={DeliveryAndPayCss.map + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                                <div style={{position:"relative",overflow:"hidden"}}><a
                                    href="https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps"
                                    style={{color:"#eee",fontStyle:"12px",position:"absolute",top:"0px"}}>Москва</a><a
                                    href="https://yandex.ru/maps/213/moscow/house/spartakovskaya_ploshchad_10s12/Z04YcABnT0MGQFtvfXt2dn9nZw==/?azimuth=0.038860846626437774&ll=37.678584%2C55.777553&utm_medium=mapframe&utm_source=maps&z=18.38"
                                    style={{color:"#eee",fontStyle:"12px",position:"absolute",top:"14px"}}>Спартаковская площадь,
                                    10с12 — Яндекс Карты</a>
                                    <iframe className={DeliveryAndPayCss.iframe} title="yandex-maps" src="https://yandex.ru/map-widget/v1/-/CCUJR8uKdC"
                                            width="560" height="400" frameBorder="1" allowFullScreen="true"
                                            style={{position:"relative",height:"400px"}}></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <Footer />
        </div>
    );
};

export default DeliveryAndPay;