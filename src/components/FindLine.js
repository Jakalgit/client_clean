import React, {useContext, useState} from 'react';
import style_css from "../css/components/FindLine.module.css"
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {FIND_ROUTE} from "../utils/consts";

const FindLine = (props) => {

    const {user} = useContext(Context)
    const navigate = useNavigate()

    const [searchValue, setSearchValue] = useState()

    const searchClick = () => {

        if (searchValue) {
            user.setSearchValue(searchValue)
            navigate(FIND_ROUTE)
        }

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {props.len === 12 ?
                            <div className={style_css.back_shadow +
                                ' col-xxl-12 offset-xxl-0 col-xl-12 offset-xl-0 col-lg-12 offset-lg-0 col-md-12 offset-md-0 col-sm-12 offset-sm-0 col-12 offset-0'}
                            >
                                <div className={style_css.padding + ' container'}>
                                    <div className="row">
                                        <input type="text"
                                               value={searchValue}
                                               onChange={event => setSearchValue(event.target.value)}
                                               className={style_css.input + ' col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9'}
                                               placeholder="Поиск товаров..."/>
                                        <button onClick={searchClick}
                                                className={style_css.find + ' col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'}>
                                            Найти
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className={style_css.back_shadow +
                                ' col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-10 offset-sm-1 col-12 offset-0'}
                            >
                                <div className={style_css.padding + ' container'}>
                                    <div className="row">
                                        <input type="text"
                                               value={searchValue}
                                               onChange={event => setSearchValue(event.target.value)}
                                               className={style_css.input + ' col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9'}
                                               placeholder="Поиск товаров..."/>
                                        <button onClick={searchClick}
                                                className={style_css.find + ' col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'}>
                                            Найти
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindLine;