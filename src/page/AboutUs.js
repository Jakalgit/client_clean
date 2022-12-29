import React, {useState} from 'react';
import style_css from "../css/AboutUs.module.css"
import Footer from "../components/Footer";
import {Fade, Zoom, Slide} from 'react-reveal';

const AboutUs = () => {

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')

    const requestClick = () => {

    }

    return (
        <div className={style_css.block}>
           <div className="container">
               <div className="row">
                   <Fade top>
                       <div className={style_css.part + " col-xxl-6 offset-xxl-0 col-xl-6 offset-xl-0 " +
                           "col-lg-6 offset-lg-0 col-md-6 offset-md-0 col-sm-6 offset-sm-0 col-10 offset-1"}>
                           <div style={{position:"relative",overflow:"hidden"}}>
                               <iframe className={style_css.iframe} title="yandex-maps" src="https://yandex.ru/map-widget/v1/-/CCUJR8uKdC"
                                       width="560" height="400" frameBorder="1" allowFullScreen="true"></iframe>
                           </div>
                           <h1 className={style_css.address_text}>м. Бауманская, Спартаковская площадь д. 10 c12</h1>
                       </div>
                       <div className={style_css.part + " col-xxl-6 offset-xxl-0 col-xl-6 offset-xl-0 " +
                           "col-lg-6 offset-lg-0 col-md-6 offset-md-0 col-sm-6 offset-sm-0 col-10 offset-1"}>
                           <h1 style={{marginTop: '0.5rem'}} className={style_css.head_text}>Контакты</h1>
                           <div className={style_css.data_block}>
                               <h2 className={style_css.data_text}>examplemail@gmail.com</h2>
                               <h2 className={style_css.data_text}>+7(916)-639-88-04</h2>
                           </div>
                           <div className={style_css.chats}>
                               <div className={style_css.tg + ' ' + style_css.back}>
                                   <img
                                       className={style_css.telegram}
                                       src={require("../img/telegram.webp")}
                                       alt=""
                                   />
                               </div>
                               <div style={{display: 'inline-block'}}>
                                   <img
                                       className={style_css.back}
                                       src={require("../img/whatsapp_logo.webp")}
                                       alt=""
                                   />
                               </div>
                           </div>
                           <div className={style_css.time_block}>
                               <h2 className={style_css.time_text}>
                                   Пн - пт: <strong>10:00 - 20:00</strong>
                               </h2>
                               <h2 className={style_css.time_text}>
                                   Cб - вс: <strong>10:00 - 18:00</strong>
                               </h2>
                           </div>
                           <h1 className={style_css.head_text + ' ' + style_css.down}>Соц. сети</h1>
                           <div className={style_css.social_links}>
                               <div className={style_css.soc_block}>
                                   <img
                                       className={style_css.yt}
                                       src={require("../img/yt_logo.webp")}
                                       alt=""
                                   />
                               </div>
                               <div className={style_css.soc_block}>
                                   <img
                                       className={style_css.vk}
                                       src={require("../img/vk_logo.webp")}
                                       alt=""
                                   />
                               </div>
                               <div className={style_css.soc_block}>
                                   <div className={style_css.tg_big}>
                                       <img
                                           className={style_css.telegram_big}
                                           src={require("../img/telegram.webp")}
                                           alt=""
                                       />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </Fade>
                   <Fade bottom>
                       {window.innerWidth < 575 ?
                           <h1 className={style_css.com_text}>
                               <strong>WORK-RC</strong> - это дружеский коллектив моделистов с большим опытом и знаниями,
                               готовый помочь вашему хобби!
                           </h1>
                           :
                           <h1 className={style_css.com_text}>
                               <strong>WORK-RC</strong> - это дружеский коллектив моделистов с большим опытом и знаниями,<br/>
                               готовый помочь вашему хобби!
                           </h1>
                       }
                   </Fade>
                   <h1 className={style_css.head_text + ' ' + style_css.head_list}>
                       <Fade cascade>
                           Мы занимаемся:
                       </Fade>
                   </h1>
                   <div className={style_css.list}>
                       <Fade left>
                           <div className={style_css.list_item}>
                               <div className={style_css.round}/>
                               <p className={style_css.item_text}>
                                   Продажей радиоуправляемых моделей, запчастей, комплектующих и т.д.
                               </p>
                           </div>
                       </Fade>
                       <Fade right>
                           <div className={style_css.list_item}>
                               <div className={style_css.round}/>
                               <p className={style_css.item_text}>
                                   Настройкой и обкаткой ДВС моделей
                               </p>
                           </div>
                       </Fade>
                       <Fade left>
                           <div className={style_css.list_item}>
                               <div className={style_css.round}/>
                               <p className={style_css.item_text}>
                                   Полным
                                   обслуживанием <p className={style_css.str}>/</p> ремонтом
                                   электро <p className={style_css.str}>/</p> двс моделей
                               </p>
                           </div>
                       </Fade>
                       <Fade right>
                           <div className={style_css.list_item}>
                               <div className={style_css.round}/>
                               <p className={style_css.item_text}>
                                   Выполняем кастомные проекты по вашему желанию
                               </p>
                           </div>
                       </Fade>
                   </div>
                   <div style={{display: 'flex', justifyContent: 'center'}}>
                       <Fade bottom>
                           <img src={require("../img/logo_small.webp")} alt="" className={style_css.logo_s}/>
                       </Fade>
                   </div>
                   <h2 className={style_css.head_text + ' ' + style_css.help}>
                       <Zoom cascade>
                           Мы всегда готовы вам помочь!
                       </Zoom>
                   </h2>
                   <div style={{display: 'flex', justifyContent: 'center'}}>
                       <Slide bottom>
                           <div className={style_css.form}>
                               <p className={style_css.feedback_text}>Обратная связь</p>
                               <input className={style_css.input} type="text" placeholder="Ваше имя"/>
                               <input className={style_css.input} type="tel" placeholder="Ваше номер телефона +7"/>
                               <button className={style_css.feedback_button}>Отправить</button>
                           </div>
                       </Slide>
                   </div>
               </div>
           </div>
           <Footer />
        </div>
    );
};

export default AboutUs;