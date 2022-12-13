import React, {useContext, useEffect, useRef, useState} from 'react';
import CatalogCss from '../css/Catalog.module.css'
import Item from '../components/Item'
import Fade from 'react-reveal/Fade';
import {Context} from "../index";
import Footer from "../components/Footer";
import {observer} from "mobx-react-lite";
import {fetchPageItems} from "../http/API/itemAPI"
import {initBasket} from "../http/API/basketAPI"
import Page from "../components/Page";
import Alert from "../components/Alert";
import {Spinner} from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import {DISCOUNT_ROUTE, NEW_ROUTE, POPULAR_ROUTE, REPAIR_ROUTE} from "../utils/consts";
import "../css/components/Alert.css"
import general from "../css/General.module.css";
import FindLine from "../components/FindLine";
import TagsLine from "../components/TagsLine";

const Catalog = observer(() => {

    document.title = 'Каталог'

    const {item} = useContext(Context)
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    const itemsRef = useRef(null)

    const [items, setItems] = useState([])

    const [start, setStart] = useState(false)
    const [message, setMessage] = useState('')
    const [style, setStyle] = useState('primary')

    const [lineTags, setLineTags] = useState([])

    useEffect(() => {
        initBasket(user.user.id).then(data => {
            user.setBasket(data)
            fetchPageItems(true, true, null, 1, JSON.stringify(lineTags)).then(data => {
                item.setTotalCount(data.count)
                setItems(data.rows)
                setLoading(false)
            })
        })
    })

    useEffect(() => {
        setItems([])
        fetchPageItems(true, true, null, item.page, JSON.stringify(lineTags))
            .then(data => {
                item.setTotalCount(data.count)
                setItems(data.rows)
        })
    }, [item.page, item, lineTags])

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                setStart(false)
            }, 2500)
        }
    }, [start])

    const updateMessage = (value) => {
        setMessage(value)
    }

    const updateStart = (value) => {
        setStart(value)
    }

    const updateStyle = (value) => {
        setStyle(value)
    }

    const updateLineTags = (value) => {
        setLineTags(value)
    }

    const scrollTo = () => {
        window.scrollTo({
            top: itemsRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
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
            <Alert start={start} variant={style} text={message} updateStart={(value) => updateStart(value)}/>
            <div className={CatalogCss.cards + ' container'}>
                <TagsLine scrollTo={() => scrollTo()} setTags={(value) => updateLineTags(value)} />
            </div>
            <div className="container">
                <div className="row">
                    <Fade left>
                        <div onClick={() => navigate(NEW_ROUTE)} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className={CatalogCss.card}>
                                <h2 className={CatalogCss.card_text}>Новинки</h2>
                                <h2 className={CatalogCss.card_icon} style={{backgroundColor: "#00E5FF"}}>new</h2>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div onClick={() => navigate(POPULAR_ROUTE)} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className={CatalogCss.card}>
                                <h2 className={CatalogCss.card_text}>Популярное</h2>
                                <h2 className={CatalogCss.card_icon + ' ' + CatalogCss.star} style={{backgroundColor: "#FDD835"}}>★</h2>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div onClick={() => navigate(DISCOUNT_ROUTE)} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className={CatalogCss.card}>
                                <h2 className={CatalogCss.card_text}>Акции</h2>
                                <h2 className={CatalogCss.card_icon} style={{backgroundColor: "#E41515"}}>%</h2>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div onClick={() => navigate(REPAIR_ROUTE)} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6">
                            <div className={CatalogCss.card}>
                                <h2 className={CatalogCss.card_text}>Ремонт</h2>
                                <h2 className={CatalogCss.card_icon} style={{backgroundColor: "#000"}}>🛠</h2>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            <div ref={itemsRef}/>

            <Fade top>
                <FindLine len={12} />
            </Fade>

            {lineTags.length !== 0 &&
                <div className="container">
                    <div className={CatalogCss.block_clean + ' row'}>
                        <Fade bottom>
                            <button onClick={() => setLineTags([])}
                                    className={CatalogCss.clean_tags}>Очистить теги</button>
                        </Fade>
                    </div>
                </div>
            }

            <div className="items">
                <div className="container">
                    {items.length !== 0 ?
                        <div className="row">
                            {items.map(item =>
                                <Item key={item.id}
                                    name={item.name}
                                    id={item.id}
                                    image={item.img}
                                    price={item.price}
                                    oldPrice={item.old_price}
                                    discount={item.discount}
                                    discountFlag={item.discount_flag}
                                    availability={item.availability}
                                    updateMessage={(value) => updateMessage(value)}
                                    updateStart={(value) => updateStart(value)}
                                    updateStyle={(value) => updateStyle(value)}
                                />
                            )}
                        </div>
                        :
                        <Fade>
                            <div className="row">
                                <h2 className={CatalogCss.empty_text}>Пусто...</h2>
                            </div>
                        </Fade>
                    }
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className={CatalogCss.page}>
                        <Page />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
});

export default Catalog;