import React from "react";
import c from "./Profile.module.css";
const Profile = () =>  {
    return (
        <div className={c.content}>
            <div>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img  src='https://pattayapeople.ru/wp-content/uploads/2018/03/Plyazh-iz-filma-Plyazh-v-Tailande-zakryvayut-dlya-poseshheniya-1.jpg' alt=""/>
            </div>
            <div>
                Logo+ acc
            </div>
            <div>
                my post
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Profile;