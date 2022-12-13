import React, {useContext, useEffect, useState} from 'react';
import ItemPageCss from '../css/ItemPage.module.css'
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import {fetchAllColor} from "../http/API/colorAPI";
import {fetchAllInfo, fetchOneItem} from "../http/API/itemAPI"
import {createBasketItem, decrementBasketItem, getAllBasketItems, incrementBasketItem} from "../http/API/basketItemAPI"
import {Context} from "../index";
import {Carousel, Spinner} from "react-bootstrap";
import Alert from "../components/Alert";
import general from "../css/General.module.css";
import {Fade} from "react-reveal";
import LoadImage from "../components/LoadImage";
import CHECK from "../img/check.webp"
import X_BLACK from "../img/x_black.webp"
import CHEVRON_LEFT from "../img/chevron-left.webp"
import CHEVRON_RIGHT from "../img/chevron-right.webp"

const ItemPage = () => {

    const {item} = useContext(Context)
    const {user} = useContext(Context)

    let [colorCount, setColorCount] = useState([])
    const [itemPg, setItem] = useState({})
    const {id} = useParams()

    const [start, setStart] = useState(false)
    const [message, setMessage] = useState('')
    const [style, setStyle] = useState('primary')

    const [info, setInfo] = useState([])
    const [colors, setColors] = useState([])

    const [currentColor, setCurrentColor] = useState(null)

    const [loading, setLoading] = useState(true)

    const [price, setPrice] = useState('')
    const [oldPrice, setOldPrice] = useState('')

    useEffect(() => {
        fetchOneItem(id).then(dataItem => {
            setItem(dataItem)
            document.title = dataItem.name
            fetchAllInfo(dataItem.id).then(data => {
                setInfo(data.rows)
            })
            fetchAllColor(id).then(dataColors => {
                if (dataColors !== 'Ошибка') {
                    setColors(dataColors)
                    setCurrentColor(dataColors[0])
                    let colorCountObj = []
                    dataColors.forEach(color => {
                        let countObject = {
                            id: color.id,
                            count: 1
                        }
                        colorCountObj.push(countObject)
                    })
                    getAllBasketItems(user.basket.id).then(data => {
                        item.setBasketItems(data)
                        item.basketItems.forEach(item => {
                            if (item.itemId === Number(id) &&
                                colorCountObj.filter(el => item.itemColorId === el.id).length !== 0) {

                                colorCountObj[colorCountObj.findIndex(el => item.itemColorId === el.id)].count = item.count
                            }
                        })
                        setColorCount(colorCountObj)
                        setLoading(false)
                    })
                }
            })
        })
    })

    useEffect(() => {
        if (itemPg.price) {
            let priceSTR = itemPg.price.toString()
            if (priceSTR.length > 3) {
                setPrice(priceSTR.slice(0, priceSTR.length - 3) + ' ' + priceSTR.slice(priceSTR.length - 3, priceSTR.length))
            } else {
                setPrice(priceSTR)
            }
        }

        if (itemPg.old_price) {
            let priceSTR = itemPg.old_price.toString()
            if (priceSTR.length > 3) {
                setOldPrice(priceSTR.slice(0, priceSTR.length - 3) + ' ' + priceSTR.slice(priceSTR.length - 3, priceSTR.length))
            } else {
                setOldPrice(priceSTR)
            }
        }
    }, [itemPg])

    useEffect(() => {
        if (start) {
            setTimeout(() => {
                setStart(false)
            }, 2500)
        }
    }, [start])

    const increment = () => {
        let colorValue = colorCount[colorCount.findIndex(el => currentColor.id === el.id)]
        if (colorValue.count < 99) {
            incrementBasketItem(id, colorValue.id, user.basket.id).then(() => {
                setColorCount(colorCount.map(el => el.id === colorValue.id ?  {...el, count: colorValue.count + 1} : el))
                item.setBasketItems(item.basketItems.map(el => el.id === id && el.itemColorId === colorValue.id ? {...el, count: colorValue.count + 1} : el))
            })
        }
    }

    const decrement = () => {
        let colorValue = colorCount[colorCount.findIndex(el => el.id === currentColor.id)]
        if (colorValue.count > 1) {
            decrementBasketItem(id, colorValue.id, user.basket.id).then(() => {
                setColorCount(colorCount.map(el => el.id === colorValue.id ? {...el, count: colorValue.count - 1} : el))
                item.setBasketItems(item.basketItems.map(el => el.id === id && el.itemColorId === colorValue.id ? {...el, count: colorValue.count - 1} : el))
            })
        }
    }

    const addToBasket = () => {
        if (itemPg.availability) {
            const count = colorCount[colorCount.findIndex(el => el.id === currentColor.id)].count
            createBasketItem(itemPg.id, user.basket.id, count, currentColor.img1, itemPg.name, itemPg.price, currentColor.id).then(() => {
                setMessage("Товар добавлен в корзину"); setStyle("primary")
            })
        } else {
            setMessage("Данного товара нет в наличии")
            setStyle("danger")
        }
        setStart(true)
    }

    const updateStart = (value) => {
        setStart(value)
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
            <Alert start={start} variant={style} text={message} updateStart={(value) => updateStart(value)} />
            <Fade top>
                <div className={ItemPageCss.item_block}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                <Carousel variant={"dark"}>
                                    <Carousel.Item>
                                        <div className={ItemPageCss.img}>
                                            <LoadImage name={currentColor.img1} className={ItemPageCss.image} />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={ItemPageCss.img}>
                                            <LoadImage name={currentColor.img2} className={ItemPageCss.image} />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={ItemPageCss.img}>
                                            <LoadImage name={currentColor.img3} className={ItemPageCss.image} />
                                        </div>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <div className={ItemPageCss.img}>
                                            <LoadImage name={currentColor.img4} className={ItemPageCss.image} />
                                        </div>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className={ItemPageCss.inf + ' col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'}>
                                <div className='flex-block col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <div className={ItemPageCss.name_block}>
                                        <h2 className={ItemPageCss.item_name}>{itemPg.name}</h2>
                                        {itemPg.discount_flag ?
                                            <h2 className={ItemPageCss.discount}>{'-' + itemPg.discount + '%'}</h2>
                                            :
                                            <div/>
                                        }
                                    </div>
                                    {itemPg.availability ?
                                        <div className={ItemPageCss.help_ava + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                                            <div className={ItemPageCss.availability + ' ' + ItemPageCss.availability_green}>
                                                <img src={CHECK} alt="" className={ItemPageCss.ava}/>
                                            </div>
                                            <h2 className={ItemPageCss.availability_text}>В наличии</h2>
                                        </div>
                                        :
                                        <div className={ItemPageCss.help_ava + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                                            <div className={ItemPageCss.availability + ' ' + ItemPageCss.availability_red}>
                                                <img src={X_BLACK} alt="" className={ItemPageCss.ava}/>
                                            </div>
                                            <h2 className={ItemPageCss.availability_text}>Нет в наличии</h2>
                                        </div>
                                    }
                                    <div className={ItemPageCss.color}>
                                        {colors.map(color =>{
                                            if (color.id === currentColor.id) {
                                                return (
                                                    <div className={ItemPageCss.select_color + ' ' + ItemPageCss.selected_color}>
                                                        <LoadImage name={color.img1} className={ItemPageCss.img_color} />
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <div onClick={() => setCurrentColor(color)} className={ItemPageCss.select_color}>
                                                        <LoadImage name={color.img1} className={ItemPageCss.img_color} />
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div className={ItemPageCss.counter + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>
                                        <div className={ItemPageCss.change} onClick={decrement}>
                                            <img src={CHEVRON_LEFT} alt="" className={ItemPageCss.chevron}/>
                                        </div>
                                        <h2 className={ItemPageCss.count}>{colorCount[colorCount.findIndex(el => el.id === currentColor.id)].count}</h2>
                                        <div className={ItemPageCss.change} onClick={increment}>
                                            <img src={CHEVRON_RIGHT} alt="" className={ItemPageCss.chevron}/>
                                        </div>
                                    </div>
                                    <h2 className={ItemPageCss.price + ' col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'}>{price + ' ₽'}</h2>
                                    {itemPg.discount_flag ?
                                        <h2 className={ItemPageCss.old_price}>{oldPrice + ' ₽'}</h2>
                                        :
                                        <div/>
                                    }
                                    <button onClick={addToBasket}
                                        className={ItemPageCss.add_to_bag + ' col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-10 offset-1'}>
                                        Добавить в корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>

            <Fade bottom>
                <div className="des-block">
                    <div className={ItemPageCss.des_back}>
                        <div className="container">
                            <div className="row">
                                {info.map(i =>
                                    <Fade>
                                        <h2 className={ItemPageCss.description + ' col-xxl-12 offset-xxl-0 col-xl-12 offset-xl-0 col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-10 offset-1'}>
                                            {i.info}
                                        </h2>
                                    </Fade>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
            <Footer />
        </div>
    );
};

export default ItemPage;