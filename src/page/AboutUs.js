import React from 'react';
import style_css from "../css/AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={style_css.block}>
           <div className="container">
               <div className="row">
                   <div className={style_css.part + " col-xxl-6"}>
                       <div style={{position:"relative",overflow:"hidden"}}>
                           <iframe className={style_css.iframe} title="yandex-maps" src="https://yandex.ru/map-widget/v1/-/CCUJR8uKdC"
                                   width="560" height="400" frameBorder="1" allowFullScreen="true"></iframe>
                       </div>
                       <h1 className={style_css.address_text}>м. Бауманская, Спартаковская площадь д. 10 c12</h1>
                   </div>
                   <div className={style_css.part + " col-xxl-6"}>
                       <h1 className={style_css.head_text}>Контакты</h1>
                       <div className={style_css.data_block}>
                           <h2 className={style_css.data_text}>examplemail@gmail.com</h2>
                           <h2 className={style_css.data_text}>+7(916)-639-88-04</h2>
                       </div>
                       <div className={style_css.chats}>

                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default AboutUs;