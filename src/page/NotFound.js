import React from 'react';
import style_css from "../css/NotFound.module.css"

const NotFound = () => {

    document.title = '404'

    return (
        <div className={style_css.block}>
            <div className="text">
                <h1 className={style_css.head}>Ошибка <p className={style_css.error}>404</p></h1>
                <p className={style_css.error_text}>
                    Данной страницы не существует, вернитесь<br/>
                    на предыдущую страницу
                </p>
            </div>
        </div>
    );
};

export default NotFound;