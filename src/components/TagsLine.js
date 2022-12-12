import React, {useState} from 'react';
import styles from "../css/components/TagsLine.module.css"
import "../css/components/ModalTransition.css"
import {CSSTransition} from "react-transition-group";
import IMG_CLOSE_BLACK from "../img/x_black.webp"

const TagsLine = ({setTags, scrollTo}) => {

    const [start, setStart] = useState(false)
    const [currentModel, setCurrentModel] = useState(null)

    const visibleModal = (model) => {
        setCurrentModel(model)
        setStart(true)
    }

    const setCurrentTags = (tag) => {
        setTags([currentModel.name, tag])
        setStart(false)
        scrollTo()
    }

    const models = [
        {
            name: "Модели",
            tags: ["1 / 5", "1 / 8", "1 / 10", "1 / 16", "Краулеры", "Монстр-траки", "ДВС", "Kit"]
        },
        {
            name: "Аккумуляторы",
            tags: ["Li-Po 2S", "Li-Po 3S", "Li-Po 4S", "Li-Po 6S", "Ni-Mh", "Переходники"]
        },
        {
            name: "Зарядные у-ва",
            tags: []
        },
        {
            name: "Электроника",
            tags: ["Моторы", "Регуляторы", "Приёмники", "Сервоприводы"]
        },
        {
            name: "ДВС / Топливо",
            tags: ["Топливо", "Свечи", "Накалы свечей", "Аксессуары"]
        },
        {
            name: "Колёса",
            tags: ["1 / 8", "1 / 10", "12 hex", "17 hex", "Диски", "1.9", "2.2"]
        },
        {
            name: "Запчасти",
            tags: ["Traxxas", "TRX", "E-REVO", "X-MAXX"]
        },
        {
            name: "Инструменты",
            tags: ["Наборы", "Биты", "Отвёртки"]
        },
        {
            name: "Сумки / Чехлы",
            tags: []
        },
        {
            name: "Масла",
            tags: ["Дифференциалы", "Амортизаторы"]
        }
    ]

    return (
        <div className="container">
            <div className={styles.row + ' row'}>
                <div className={styles.tags_line}>
                    {models.map(model =>
                        <div onClick={() => visibleModal(model)}
                            key={model.name+1} className={styles.dropdown_tag}>
                            <h1 key={model.name+2} className={styles.tag_text}>{model.name}</h1>
                        </div>
                    )}
                </div>
                <CSSTransition
                    in={start}
                    timeout={350}
                    classNames="modal-repair"
                    mountOnEnter
                    unmountOnExit
                >
                    <div className={styles.tags_block + ' modal-repair'}>
                        <div onClick={e => e.stopPropagation()}
                            className={styles.window_area}>
                            <div className={styles.close_block}>
                                <img
                                    className={styles.close_img}
                                    src={IMG_CLOSE_BLACK}
                                    alt=""
                                    onClick={() => setStart(false)}
                                />
                            </div>
                            {currentModel &&
                                <div className={styles.tags_list}>
                                    {currentModel.tags.map(tag =>
                                        <h1 onClick={() => setCurrentTags(tag)}
                                            className={styles.cur_tag}>
                                            {tag}
                                        </h1>
                                    )}
                                </div>
                            }
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default TagsLine;