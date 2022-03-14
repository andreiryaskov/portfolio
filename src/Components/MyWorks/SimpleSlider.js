import React, {useEffect, useState} from "react";
import slide1 from "../../img/project_1.png";
import slide2 from "../../img/project_1.png";
import slide3 from "../../img/project_1.png";
import slide4 from "../../img/project_1.png";
import slide5 from "../../img/project_1.png";
import style from "./SimpleSlider.module.scss"
import project_1 from "../../img/project_1.png";

const img = [
    <img key={slide1} src={project_1} />,
    <img key={slide2} src={project_1} />,
    <img key={slide3} src={project_1} />,
    <img key={slide4} src={project_1} />,
    <img key={slide5} src={project_1} />,
]

export default function SimpleSlider() {
    // Индекс текущего слайда
    const [activeIndex, setActiveIndex] = useState(0);

// Хук Effect
//     useEffect(() => {
//         // Запускаем интервал
//         const interval = setInterval(() => {
//             // Меняем состояние
//             setActiveIndex((current) => {
//                 // Вычисляем индекс следующего слайда, который должен вывестись
//                 const res = current === img.length - 1 ? 0 : current + 1
//                 // Возвращаем индекс
//                 return res
//             })
//         }, 6000)
//         // Выключаем интервал
//         return () => clearInterval()
//     }, [])

// Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <div className={style.slider}>
            <div className={`${style.slider_img} ${style.slider_img_prev}`}
                 key={prevImgIndex}>
                {img[prevImgIndex]}
                <button>Open</button>
                <div className={style.description}>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={style.slider_img}
                 key={activeIndex}>
                {img[activeIndex]}
                <button>Open</button>
                <div className={style.description}>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
            <div className={`${style.slider_img} ${style.slider_img_next}`}
                 key={nextImgIndex}>
                {img[nextImgIndex]}
                <button>Open</button>
                <div className={style.description}>
                    <h2>Project Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}