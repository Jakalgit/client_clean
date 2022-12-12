import React from 'react';
import Footer from "../components/Footer";
import {Link, useNavigate} from "react-router-dom";
import {CATALOG_ROUTE, DISCOUNT_ROUTE, NEW_ROUTE, POPULAR_ROUTE, REPAIR_ROUTE} from "../utils/consts";
import HomeCss from "../css/Home.module.css"
import {Carousel} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import FindLine from "../components/FindLine";

const Home = () => {

    document.title = 'Добро пожаловать!'

    const navigate = useNavigate()

    return (
        <div style={{marginTop: "6rem"}}>
            <Fade top>
                <FindLine len={10} />
            </Fade>
            <Fade>
                <Carousel variant={'dark'}>
                    <Carousel.Item>
                        <div className={HomeCss.carousel_block}>
                            <h1 className={HomeCss.welcome_text}>
                                Добро пожаловать!
                            </h1>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div onClick={() => navigate(DISCOUNT_ROUTE)}
                             className={HomeCss.carousel_block + ' ' + HomeCss.hover}>
                            <h1 className={HomeCss.welcome_text}>
                                Акции
                            </h1>
                            <h1 className={HomeCss.discount}>%</h1>
                        </div>
                        <Carousel.Caption>
                            <p className={HomeCss.prompt}>Нажмите чтобы посмотреть</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div onClick={() => navigate(NEW_ROUTE)}
                             className={HomeCss.carousel_block + ' ' + HomeCss.hover}>
                            <h1 className={HomeCss.welcome_text}>
                                Новинки
                            </h1>
                            <h1 style={{backgroundColor: "#00E5FF"}} className={HomeCss.discount + ' ' + HomeCss.new}>new</h1>
                        </div>
                        <Carousel.Caption>
                            <p className={HomeCss.prompt}>Нажмите чтобы посмотреть</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div onClick={() => navigate(POPULAR_ROUTE)}
                             className={HomeCss.carousel_block + ' ' + HomeCss.hover}>
                            <h1 className={HomeCss.welcome_text}>
                                Популярное
                            </h1>
                            <h1 style={{backgroundColor: "#FDD835"}} className={HomeCss.discount}>★</h1>
                        </div>
                        <Carousel.Caption>
                            <p className={HomeCss.prompt}>Нажмите чтобы посмотреть</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div onClick={() => navigate(REPAIR_ROUTE)} className={HomeCss.carousel_block + ' ' + HomeCss.hover}>
                            <h1 className={HomeCss.welcome_text}>
                                Ремонт
                            </h1>
                            <h1 style={{backgroundColor: "#000"}} className={HomeCss.discount}>🛠</h1>
                        </div>
                        <Carousel.Caption>
                            <p className={HomeCss.prompt}>Нажмите чтобы посмотреть</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Fade>

            <div className="container">
                <div className="row">
                    <Fade left>
                        <h2 className={HomeCss.text_catalog + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>Весь
                            ассортимент товаров вы можете посмотреть в <Link to={CATALOG_ROUTE}><p className={HomeCss.href}>каталоге</p></Link></h2>
                    </Fade>
                    <Fade right>
                        <h2 className={HomeCss.phone_number + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>+7(985)-340-26-36</h2>
                    </Fade>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;