import React, {useState} from 'react';
import style_css from "../css/components/RepairModal.module.css"
import "../css/components/ModalTransition.css"
import {CSSTransition} from "react-transition-group";
import {createRepairRequest} from "../http/API/repairAPI";
import IMG_WHEEL from "../img/slider/wheel.jpg"

const RepairModal = (props) => {

    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const requestClick = () => {
        if (phone.startsWith("+7") && phone.length === 12) {
            if (name.length > 1 && name.length < 20 && message) {
                createRepairRequest(name, phone, message).then(data => {
                    if (data !== "Error" && data !== "Ошибка") {
                        props.setMessage("Заявка оставлена")
                        props.setStyle("primary")
                        props.setShow(false)
                    } else {
                        props.setMessage("Ошибка")
                        props.setStyle("danger")
                    }
                    props.setStart(true)
                }).catch(() => {
                    props.setMessage("Ошибка соединения")
                    props.setStyle("danger")
                    props.setStart(true)
                })
            } else {
                if (!message) {
                    props.setMessage("Заполните все поля")
                    props.setStyle("danger")
                    props.setStart(true)
                } else {
                    props.setMessage("Имя от 1 до 23 символов")
                    props.setStyle("danger")
                    props.setStart(true)
                }
            }
        } else {
            props.setMessage("Номер формата +7XXXXXXXXXX")
            props.setStyle("danger")
            props.setStart(true)
        }
    }

    return (
        <CSSTransition
            in={props.show}
            timeout={350}
            classNames="modal-repair"
            mountOnEnter
            unmountOnExit
        >
            <div className={style_css.modal + ' modal-repair'} onClick={() => props.setShow(false)}>
                <div className={style_css.island} onClick={e => e.stopPropagation()}>
                    <div className={style_css.work}>
                        <div className={style_css.img_block}>
                            <p className={style_css.text}>Заявка на ремонт</p>
                            <img src={IMG_WHEEL} alt="" className={style_css.image}/>
                        </div>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className={style_css.input} placeholder="Номер телефона +7"/>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className={style_css.input} placeholder="Ваше имя"/>
                        <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" className={style_css.input} placeholder="Время звонка"/>
                        <button className={style_css.request} onClick={requestClick}>Оставить заявку</button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default RepairModal;