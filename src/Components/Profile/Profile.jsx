import React from "react";
import c from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img
                    src='https://pattayapeople.ru/wp-content/uploads/2018/03/Plyazh-iz-filma-Plyazh-v-Tailande-zakryvayut-dlya-poseshheniya-1.jpg'
                    alt=""/>
            </div>
            <div>
                Logo+ acc
            </div>
            <MyPost/>
        </div>
    )
};
export default Profile;