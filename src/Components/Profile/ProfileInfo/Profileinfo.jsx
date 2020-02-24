import React from "react";
import c from "./Profileinfo.module.css";

const Profileinfo = () => {
    return (
        <div>
            <div className={c.profileimg}>
                <img
                    src='https://pattayapeople.ru/wp-content/uploads/2018/03/Plyazh-iz-filma-Plyazh-v-Tailande-zakryvayut-dlya-poseshheniya-1.jpg'
                    alt=""/>
            </div>
            <div>
                Logo+ acc
            </div>

        </div>
    )
};
export default Profileinfo;