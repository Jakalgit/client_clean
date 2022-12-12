import React, {useEffect, useState} from 'react';
import style_css from "../css/Repair.module.css"
import Footer from "../components/Footer";
import {Fade, Flip, Bounce} from "react-reveal"
import RepairModal from "../components/RepairModal";
import Alert from "../components/Alert";
import {Carousel} from "react-bootstrap";

const Repair = () => {

    document.title = 'Ремнот'

    const [show, setShow] = useState(false)

    const [start, setStart] = useState(false)
    const [style, setStyle] = useState('primary')
    const [message, setMessage] = useState('')

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                setStart(false)
            }, 2500)
        }
    }, [start])

    const updateStart = (value) => {
        setStart(value)
    }

    const updateStyle = (value) => {
        setStyle(value)
    }

    const updateMessage = (value) => {
        setMessage(value)
    }

    const updateShow = (udt) => {
        setShow(udt)
    }

    return (
        <div>
            <Alert start={start} variant={style} text={message} updateStart={(value) => updateStart(value)}/>
            <RepairModal
                show={show}
                setShow={(value) => updateShow(value)}
                setStyle={(value) => updateStyle(value)}
                setStart={(value) => updateStart(value)}
                setMessage={(value) => updateMessage(value)}
            />
            <div className={style_css.repair}>
                <div className="container">
                    <div className="row">
                        <Fade cascade>
                            <h1 className={style_css.rep}>Ремонт моделей</h1>
                        </Fade>
                        <Fade>
                            <Carousel variant='dark'>
                                <Carousel.Item>
                                    <div className={style_css.slider_item}>
                                        <img src={require("../img/slider/sett.jpg")} alt="" className={style_css.slider_img}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style_css.slider_item}>
                                        <img src={require("../img/slider/short.jpg")} alt="" className={style_css.slider_img}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style_css.slider_item}>
                                        <img src={require("../img/slider/printer1.jpg")} alt="" className={style_css.slider_img}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style_css.slider_item}>
                                        <img src={require("../img/slider/printer2.jpg")} alt="" className={style_css.slider_img}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style_css.slider_item}>
                                        <img src={require("../img/slider/oils.jpg")} alt="" className={style_css.slider_img}/>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className={style_css.slider_item}>
                                        <img src={require("../img/slider/wheels.jpg")} alt="" className={style_css.slider_img}/>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                            <h2 className={style_css.rep_des}>
                                В нашем распоряжении <p className={style_css.bold}>качественные инструменты</p>, у нас<br/>
                                работают <p className={style_css.bold}>проффесионалы</p> со стажем <p className={style_css.bold}>более
                                нескольких лет.</p>
                            </h2>
                        </Fade>
                    </div>
                </div>
            </div>
            <Fade bottom>
                <div className={style_css.prices}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-6">
                                <Fade bottom>
                                    <h1 className={style_css.text}>Услуги</h1>
                                </Fade>
                                <div className={style_css.column}>
                                    <Fade cascade>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Диагностика модели</h2>
                                        </div>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Обкатка ДВС модели</h2>
                                        </div>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Настройка ДВС модели</h2>
                                        </div>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Обкатка + настройка ДВС</h2>
                                        </div>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Ремонт электроники</h2>
                                        </div>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Обслуживание ДВС</h2>
                                        </div>
                                        <p className={style_css.sub}>С полной переборкой и заменой подшипников.</p>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}/>
                                            <h2 className={style_css.service}>Устновка доп.оборудования</h2>
                                        </div>
                                        <p className={style_css.sub}>Свет, лебёдки, световой модуль и т. д.</p>
                                        <div className={style_css.line}>
                                            <div className={style_css.graph}></div>
                                            <h2 className={style_css.service}>Покраска кузова</h2>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                                <Fade bottom>
                                    <h1 className={style_css.text}>Цены</h1>
                                </Fade>
                                <div className={style_css.column} style={{marginLeft: "0"}}>
                                    <Fade cascade>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont} style={{fontWeight: "bold"}}>Бесплатно</h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont}>2 490 ₽</h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont}>1 290 ₽</h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont}>3 490 ₽</h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont}><p
                                                style={{display: "inline-block", fontWeight: "bold", margin: 0}}>от</p> 200 ₽
                                            </h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont}>2 990 ₽</h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont} style={{fontWeight: "bold"}}>
                                                Обговаривается индивидуально
                                            </h2>
                                        </div>
                                        <div className={style_css.line + ' ' + style_css.prc} style={{justifyContent: "center"}}>
                                            <h2 className={style_css.service + ' ' + style_css.mont} style={{fontWeight: "bold"}}>
                                                Обговаривается индивидуально
                                            </h2>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <div className={style_css.contacts}>
                <Fade bottom>
                    <h2 className={style_css.rep_des}>Точное время работы <p className={style_css.bold}>обговаривается индивидуально</p>.</h2>
                </Fade>
                <Flip bottom>
                    <button className={style_css.request} onClick={() => setShow(true)}>Оставить заявку</button>
                </Flip>
                <Bounce cascade>
                    <a className={style_css.number} href="tel:+79859532696">+7(985)-943-35-45</a>
                </Bounce>
            </div>
            <Footer />
        </div>
    );
};

export default Repair;